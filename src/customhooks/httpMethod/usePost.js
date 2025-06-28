import { useConfirm, useAlert } from "../../store/zustandStore";
import Axios from './utils/Axios';
import { error } from "./utils/error";
import { useLoading } from "../../store/zustandStore";
const usePost = (url) => {
    const alert = useAlert(state => state.handleAlert);
    const confirm = useConfirm(state => state.handleConfirm);
    const setLoading = useLoading(state => state.handleLoading);
    const post = async(data,cb,confirmAction=true,message=["Are you sure want to save?","Changes can't be undone"]) => {
        if(confirmAction){
            const action = await confirm(message[0],message[1]);
            if(!action){
                return;
            }
        }
        setLoading(true);
        Axios.post(url,data,{withCredentials:true})
        .then((res)=>{
            setLoading(false);
            if(res.status === 201){
                alert(res.data.message);
                if(cb){
                    cb(res.data);
                }
            }
            else if(res.status === 200){
                if(cb){
                    cb(res.data.message);
                }
            }
        })
        .catch((err)=>{
            setLoading(false);
            error(err,alert);
        })
    }
    return { post };
}
export default usePost;