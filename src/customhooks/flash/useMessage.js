import { AppContext } from "../../App";
import { useContext } from "react";
const useMessage = () => {
    const { FlashMsg } = useContext(AppContext);
    return async(message,success) => {
        FlashMsg.current.show(message,success);
    }
}
export default useMessage;