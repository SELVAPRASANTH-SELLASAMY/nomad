import Axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
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
            if(err.response){
                const { status, data } = err.response;
                if(status === 500){
                    const { message, error } = data;
                    console.log(message+" "+error);
                }
                else{
                    console.log(data);
                }
            }
            else if(err.request){
                console.log(err.request);
            }
            else{
                console.log(err.message);
            }
        })
    },[url]);
    return data;
}

export { useFetch };