import { FaArrowUp } from "react-icons/fa";
import Option from "./Option";
import { useState } from "react";
function Select({name,options,Styles,fullWidth,value,setValue,setAscending,ascending}){
    const [expand,setExpand] = useState(false);
    return(
       <div role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="OptionList" className={`${fullWidth ? "w-100" : "w-15rem"} relative no-user-select z-index-1`}>
            <div className={`fs-4 bg-tile-blue ptb-025 plr-1 rounded-05 border-grey-01 d-flex center-y gap-025 ${Styles && Styles}`}>
                {name && name.toLowerCase() === "sort by" && 
                    <span style={{transform:ascending === 1 ? "rotate(0deg)" : "rotate(180deg)"}} onClick={() => setAscending(ascending === 1 ? -1 : 1)} className="d-iflex pointer">
                        <FaArrowUp/>
                    </span>
                }
                {name && <span className="cap-first-letter">
                    {name} :
                </span>}
                <strong tabIndex="0" onFocus={()=>setExpand(true)} onBlur={()=>setExpand(false)} className="font-weight-500 lowercase pointer">
                    {value.label || value}
                </strong>
            </div>
            {expand && 
                <Option options={options} setValue={setValue} value={value}/>
            }
       </div>
    );
}
export default Select;