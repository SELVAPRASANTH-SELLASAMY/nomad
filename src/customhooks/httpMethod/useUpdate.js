import Axios from "./utils/Axios";
import { error } from "./utils/error";
import { useConfirm, useAlert } from "../../store/userStore";
const useUpdate = (url) => {
    const alert = useAlert(state => state.handleAlert);
    const confirm = useConfirm(state => state.handleConfirm);
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
                alert(res.data.message);
                if(res.data?.data){
                    return res.data.data;
                }
                //Need to return updated data from the server
            }
        })
        .catch((err)=>{
            error(err,alert);
        })
    }
    return { update };
}
export default useUpdate;