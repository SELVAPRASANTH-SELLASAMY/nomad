import { useState, useEffect } from "react";
import { useMessage } from '../flash';
import Axios from './utils/Axios';
import { error } from './utils/error';
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const alert = useMessage();
    useEffect(() => {
        if(!url){
            return;
        }
        Axios.get(url)
        .then((res) => {
            if(res.status === 200){
                setData(res.data);
            }
        })
        .catch((err) => {
            error(err,alert);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[url]);
    return { data, setData };
}
export default useFetch;