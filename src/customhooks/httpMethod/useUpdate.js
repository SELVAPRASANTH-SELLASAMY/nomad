import { useMessage, useConfirm } from "../flash";
import Axios from "./utils/Axios";
import { error } from "./utils/error";
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
export default useUpdate;