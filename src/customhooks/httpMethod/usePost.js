import { useConfirm, useMessage } from "../flash";
import Axios from './utils/Axios';
import { error } from "./utils/error";
const usePost = (url) => {
    const confirm = useConfirm();
    const alert = useMessage();
    const post = async(data,cb,confirmAction=true) => {
        if(confirmAction){
            const action = await confirm("Are you sure want to save","Changes can't be undone");
            if(!action){
                return;
            }
        }
        Axios.post(url,data)
        .then((res)=>{
            if(res.status === 201){
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
    return { post };
}
export default usePost;