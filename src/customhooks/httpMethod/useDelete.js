import { useConfirm, useAlert } from '../../store/userStore';
import Axios from './utils/Axios';
import { error } from './utils/error';
const useDelete = (url) => {
    const alert = useAlert(state => state.handleAlert);
    const confirm = useConfirm(state => state.handleConfirm);
    const erase = async(cb) => {
        const action = await confirm("Are you sure want to delete","Changes can't be undone");
        if(!action){
            return;
        }
        Axios.delete(url)
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