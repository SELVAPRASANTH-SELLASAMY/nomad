import CryptoJS from "crypto-js"
const useLocalStorage = () => {
    const setItem = (itemName,value) => {
        const encVal = CryptoJS.AES.encrypt(
            JSON.stringify(value),
            process.env.REACT_APP_SECRET
        ).toString();
        localStorage.setItem(itemName,encVal);
    }

    const getItem = (itemName) => {
        const encVal = localStorage.getItem(itemName);
        if(encVal){
            const decVal = CryptoJS.AES.decrypt(
                encVal,
                process.env.REACT_APP_SECRET
            ).toString(CryptoJS.enc.Utf8);
            const parsedVal = JSON.parse(decVal);
            return parsedVal;
        }
        return null;
    }
    return { setItem, getItem };
}
export default useLocalStorage;