import CryptoJS from "crypto-js";
const useSetItem = () => {
    const setItem = (itemName,value) => {
        const encVal = CryptoJS.AES.encrypt(
            JSON.stringify(value),
            process.env.REACT_APP_SECRET
        ).toString();
        localStorage.setItem(itemName,encVal);
    }
    return { setItem };
}
export default useSetItem;