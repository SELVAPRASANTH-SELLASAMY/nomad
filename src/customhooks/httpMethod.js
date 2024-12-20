import axios from "axios";
import { useEffect, useState } from "react";

const Axios = axios.create({
    baseURL: 'http://localhost:3001/nomad'
});

const error = (err) => {
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
}

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
            error(err);
        })
    },[url]);
    return data;
}

const usePost = (url) => {
    const post = (data) => {
        Axios.post(url,data)
        .then((res)=>{
            if(res.status === 201){
                console.log(res.data);
            }
        })
        .catch((err)=>{
            error(err);
        })
    }
    return { post };
}

const useDelete = (url) => {
    const erase = () => {
        Axios.delete(url)
        .then((res)=>{
            if(res.status === 200){
                console.log("Blog deleted");
            }
        })
        .catch((err)=>{
            error(err);
        })
    }
    return { erase };
}

export { useFetch, usePost, useDelete };