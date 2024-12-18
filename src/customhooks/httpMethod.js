import Axios from 'axios';
import { useEffect } from 'react';
const useFetch = (url) => {
    useEffect(() => {
        Axios.get(url)
        .then((res) => {
            switch(res.status){
                case 200:
                    return [res.data.response,200];
                case 404:
                    return ["Requested source not found!",404];
                default:
                    console.log(res.data.response);
                    return ["Something went wrong!",500];
            }
        })
        .catch((error) => {
            console.log(error);
            return ["Something went wrong!",500];
        })
    },[url]);
}

export { useFetch };