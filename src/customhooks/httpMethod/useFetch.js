import { useEffect, useReducer } from "react";
import Axios from './utils/Axios';
import { debounce } from "lodash";
const useFetch = (url,condition) => {
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
        isPending: false
    });
    
    useEffect(() => {
        if(!url || (condition && (condition[0] === condition[1]))){
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
                    const { data } = err.response;
                    dispatch({type:"SET_ERROR",error: data});
                    data?.error ? console.error(data.error) : console.error(data.message);
                }
                else{
                    dispatch({type:"SET_ERROR",error:err.message});
                    console.error(err);
                }
            })
        },[1000]);

        debouncer();

        return () => debouncer.cancel();
        
    },[url,condition]);

    return { data:res.data, error:res.error, isPending:res.isPending, setData: (data) => dispatch({type:"SET_DATA",payload: data}) };
}

export default useFetch;