import { selectContext } from "./Select";
import { useContext } from "react";
function Option({value}){
    const setValue = useContext(selectContext);
    return(
        <li className="plr-1 ptb-05 capitalize hover-blue pointer" onClick={()=>setValue(value)}>{value}</li>
    );
}
export default Option;