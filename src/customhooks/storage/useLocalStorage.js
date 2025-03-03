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
        const data = localStorage.getItem(itemName);
        const decVal = CryptoJS.AES.decrypt(
            data,
            process.env.REACT_APP_SECRET
        ).toString(CryptoJS.enc.Utf8);
        const parsedVal = JSON.parse(decVal);
        return parsedVal;
    }

    return { setItem, getItem };
}

export default useLocalStorage;