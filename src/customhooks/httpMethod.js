import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";

const Axios = axios.create({
    baseURL: 'http://localhost:3001/nomad/blog'
});

const useConfirm = () => {
    const { FlashConfirm } = useContext(AppContext);
    return async(title,message) => {
        const action = await FlashConfirm.current.confirm(title,message);
        return action;
    }
}

const useMessage = () => {
    const { FlashMsg } = useContext(AppContext);
    return async(message,success) => {
        FlashMsg.current.show(message,success);
    }
}

const error = (err,alert) => {
    console.log(err);
    if(err.response){
        const { status, data } = err.response;
        if(status === 500){
            const { message, error } = data;
            alert(message,false);
            console.log(error);
        }
        else{
            alert(data,false);
            console.log(data);
        }
    }
    else if(err.request){
        alert(err.request,false);
        console.log(err.request);
    }
    else{
        alert(err.message,false);
        console.log(err.message);
    }
}

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

const usePost = (url) => {
    const alert = useMessage();
    const post = (data) => {
        Axios.post(url,data)
        .then((res)=>{
            if(res.status === 201){
                alert(res.data);
            }
        })
        .catch((err)=>{
            error(err,alert);
        })
    }
    return { post };
}

const useUpdate = (url) => {
    const alert = useMessage();
    const confirm = useConfirm();
    const update = async(data) => {
        if(!url){
            return;
        }
        const action = await confirm("Are you sure want to save","Changes can't be undone");
        if(!action){
            return;
        }
        Axios.patch(url,data)
        .then((res)=>{
            if(res.status === 200){
                alert(res.data);
            }
        })
        .catch((err)=>{
            error(err,alert);
        })
    }
    return { update };
}

const useDelete = (url) => {
    const alert = useMessage();
    const confirm = useConfirm();
    const erase = async(cb) => {
        const action = await confirm("Are you sure want to delete","Changes can't be undone");
        if(!action){
            return;
        }
        Axios.delete(url)
        .then((res)=>{
            if(res.status === 200){
                alert(res.data);
                if(cb){
                    cb();
                }
            }
        })
        .catch((err)=>{
            error(err,alert);
        })
    }
    return { erase };
}

export { useFetch, usePost, useDelete, useUpdate };