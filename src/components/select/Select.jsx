import { debounce } from "lodash";
import { createContext, useState } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
const selectContext = createContext();
function Select({name,children}){
    const [value,setValue] = useState(children[0].props.value);
    const [focus,setFocus] = useState(false);
    const handleBlur = debounce(()=>{
        setFocus(false);
    },[225]);
    return(
        <div className="w-15rem">
            <div className="fs-4 bg-tile-blue d-iflex ptb-025 plr-1 rounded-05 center-y gap-025 border-grey-01 w-100">
                { 
                    name === "Sort by" && 
                    <span className="d-iflex pointer fs-5">
                        <HiMiniArrowsUpDown/>
                    </span>
                }
                <span>{name} :</span>
                <strong onFocus={()=>setFocus(true)} onBlur={handleBlur} tabIndex="0" className="font-weight-500 lowercase pointer">{value}</strong>
            </div>
            {
                focus &&
                <ul className="list-style-none lowercase rounded-05 hide-overflow mt-025 border-grey-01 pointer">
                    <selectContext.Provider value={setValue}>
                        {children}
                    </selectContext.Provider>
                </ul>
            }
        </div>
    );
}
export default Select;
export {selectContext};