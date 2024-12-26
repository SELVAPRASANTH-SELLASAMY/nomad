import { AppContext } from '../../App';
import { useContext } from 'react';
const useConfirm = () => {
    const { FlashConfirm } = useContext(AppContext);
    return async(title,message) => {
        const action = await FlashConfirm.current.confirm(title,message);
        return action;
    }
}
export default useConfirm;