import { useMessage, useConfirm } from "../flash";
import Axios from "./utils/Axios";
import { error } from "./utils/error";
const useUpdate = (url) => {
    const alert = useMessage();
    const confirm = useConfirm();
    const update = async(data,cb,confirmAction=true) => {
        if(!url){
            return;
        }
        if(confirmAction){
            const action = await confirm("Are you sure want to save","Changes can't be undone");
            if(!action){
                return;
            }
        }
        Axios.patch(url,data,{withCredentials: true})
        .then((res)=>{
            if(res.status === 200){
                if(cb){
                    cb();
                }
                alert(res.data);
            }
        })
        .catch((err)=>{
            error(err,alert);
        })
    }
    return { update };
}
export default useUpdate;