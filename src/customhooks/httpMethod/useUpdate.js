import Axios from "./utils/Axios";
import { error } from "./utils/error";
import { useConfirm, useAlert } from "../../store/zustandStore";
import { useLoading } from "../../store/zustandStore";
const useUpdate = (url) => {
    const alert = useAlert(state => state.handleAlert);
    const confirm = useConfirm(state => state.handleConfirm);
    const setLoading = useLoading(state => state.handleLoading);
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
        setLoading(true);
        Axios.patch(url,data,{withCredentials: true})
        .then((res)=>{
            setLoading(false);
            if(res.status === 200){
                if(cb){
                    cb(res.data);
                }
                alert(res.data.message);
                if(res.data?.data){
                    return res.data.data;
                }
            }
        })
        .catch((err)=>{
            setLoading(false);
            error(err,alert);
        })
    }
    return { update };
}
export default useUpdate;