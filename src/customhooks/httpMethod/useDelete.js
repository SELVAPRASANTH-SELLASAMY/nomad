import { useConfirm, useAlert } from '../../store/zustandStore';
import Axios from './utils/Axios';
import { error } from './utils/error';
const useDelete = (url) => {
    const alert = useAlert(state => state.handleAlert);
    const confirm = useConfirm(state => state.handleConfirm);
    const erase = async(cb,data=null) => {
        const action = await confirm("Are you sure want to delete","Changes can't be undone");
        if(!action){
            return;
        }
        Axios.delete(url,{withCredentials: true, data})
        .then((res)=>{
            if(res.status === 200){
                alert(res.data.message);
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
export default useDelete;