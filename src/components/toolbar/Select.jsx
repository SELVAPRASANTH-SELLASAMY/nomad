import { debounce } from "lodash";
import { createContext, useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";
const selectContext = createContext();
function Select({ name, children }){
    const [value,setValue] = useState('');
    const [focus,setFocus] = useState(false);
    const handleBlur = debounce(()=>{
        setFocus(false);
    },250);
    return(
        <div>
            <div tabIndex="0" onFocus={()=>setFocus(true)} onBlur={handleBlur} className="bg-tile-blue rounded-05 capitalize border-grey-01 pointer w-13rem">
                <p className="fs-4 ptb-05 plr-1 d-flex gap-025 center-y">
                    {name === "Sort by" && <LuArrowUpDown/>}
                    <span className="fs-3">{name} <b>:</b></span>
                    <strong className="fs-3 font-weight-500">{value}</strong>
                </p>
            </div>
            {
                focus && 
                <selectContext.Provider value={setValue}>
                    <ul className="list-style-none fs-3 bg-tile-blue w-100 border-grey-01 mt-025 rounded-05 hide-overflow">
                        {children}
                    </ul>
                </selectContext.Provider>
            }
        </div>
    );
}
export default Select;
export { selectContext };