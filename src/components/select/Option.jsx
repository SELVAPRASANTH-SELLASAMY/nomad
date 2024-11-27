import { useContext } from "react";
import { selectContext } from "./Select";
function Option({value}){
    const setValue = useContext(selectContext);
    return(
        <li onMouseDown={()=>setValue(value)} className="bg-tile-blue ptb-025 plr-1 hover-blue">{value}</li>
    );
}
export default Option;