import { useConfirm, useAlert } from "../../store/userStore";
import Axios from './utils/Axios';
import { error } from "./utils/error";
const usePost = (url) => {
    const alert = useAlert(state => state.handleAlert);
    const confirm = useConfirm(state => state.handleConfirm);
    const post = async(data,cb,confirmAction=true,message=["Are you sure want to save?","Changes can't be undone"]) => {
        if(confirmAction){
            const action = await confirm(message[0],message[1]);
            if(!action){
                return;
            }
        }
        Axios.post(url,data,{withCredentials:true})
        .then((res)=>{
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
            error(err,alert);
        })
    }
    return { post };
}
export default usePost;