import { useEffect, useState } from "react"
import CryptoJS from "crypto-js";
const useGetItem = (itemName) => {
    const [data,setData] = useState("");

    useEffect(() => {
        const item = localStorage.getItem(itemName);
        if(item){
            const dec = CryptoJS.AES.decrypt(
                item,
                process.env.REACT_APP_SECRET
            ).toString(CryptoJS.enc.Utf8);
            const parsedVal = JSON.parse(dec);
            setData(parsedVal);
        }
    },[itemName]);

    return data;
}
export default useGetItem;