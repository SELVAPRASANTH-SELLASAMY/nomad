import { useMessage, useConfirm } from '../flash';
import Axios from './utils/Axios';
import { error } from './utils/error';
const useDelete = (url) => {
    const alert = useMessage();
    const confirm = useConfirm();
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