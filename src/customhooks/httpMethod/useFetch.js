import { useEffect, useReducer } from "react";
import Axios from './utils/Axios';
import { debounce } from "lodash";
const useFetch = (url) => {
    const reducer = (state,action) => {
        switch(action.type){
            case "SET_DATA":
                return {...state, data:action.payload, isPending:false};
            case "SET_ERROR":
                return {...state, error:action.error, isPending:false};
            case "RESET":
                return{...state, data:null, error:null, isPending:true};
            default:
                return state;
        }
    }

    const [res,dispatch] = useReducer(reducer,{
        data:null,
        error:null,
        isPending:true
    });
    
    useEffect(() => {
        if(!url){
            return;
        }
        dispatch({type:"RESET"});
        const debouncer = debounce(() => {
            Axios.get(url,{withCredentials: true})
            .then((res) => {
                if(res.status === 200){
                    dispatch({type:"SET_DATA",payload:res.data});
                }
            })
            .catch((err) => {
                if(err.response){
                    const { status, data } = err.response;
                    if(status === 500){
                        const { message, error } = data;
                        dispatch({type:"SET_ERROR",error:message});
                        console.error(error);
                    }
                    else{
                        dispatch({type:"SET_ERROR",error:data});
                        console.error(data);
                    }
                }
                else{
                    dispatch({type:"SET_ERROR",error:err.message});
                    console.error(err);
                }
            })
        },[1000]);

        debouncer();

        return () => debouncer.cancel();
        
    },[url]);

    return { data:res.data, error:res.error, isPending:res.isPending };
}

export default useFetch;