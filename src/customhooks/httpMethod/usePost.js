import { useMessage } from "../flash";
import Axios from './utils/Axios';
import { error } from "./utils/error";
const usePost = (url) => {
    const alert = useMessage();
    const post = (data) => {
        Axios.post(url,data)
        .then((res)=>{
            if(res.status === 201){
                alert(res.data);
            }
        })
        .catch((err)=>{
            error(err,alert);
        })
    }
    return { post };
}
export default usePost;