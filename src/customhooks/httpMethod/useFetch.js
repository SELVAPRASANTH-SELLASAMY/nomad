import { useState, useEffect } from "react";
import { useMessage } from '../flash';
import Axios from './utils/Axios';
import { error } from './utils/error';
import { debounce } from "lodash";
const useFetch = (url,page) => {
    const [data,setData] = useState(null);
    const alert = useMessage();
    useEffect(() => {
        if(!url){
            return;
        }
        const debouncer = debounce(() => {
            Axios.get(`${url}${page ? `?page=${page}` : ''}`)
            .then((res) => {
                if(res.status === 200){
                    setData(res.data);
                }
            })
            .catch((err) => {
                error(err,alert);
            })
        },[1000]);

        debouncer();

        return () => debouncer.cancel();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[url,page]);
    return { data };
}
export default useFetch;