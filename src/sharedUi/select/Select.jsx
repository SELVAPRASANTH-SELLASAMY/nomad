import { RiArrowUpDownFill } from "react-icons/ri";
import Option from "./Option";
import { useState } from "react";
function Select({name,options,Styles,value,setValue}){
    const [expand,setExpand] = useState(false);
    return(
       <div role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="OptionList" className="w-15rem relative no-user-select">
            <div className={`fs-4 bg-tile-blue ptb-025 plr-1 rounded-05 border-grey-01 d-flex center-y gap-025 ${Styles && Styles}`}>
                {name && name.toLowerCase() === "sort by" && 
                    <span className="d-iflex pointer">
                        <RiArrowUpDownFill/>
                    </span>
                }
                {name && <span className="cap-first-letter">
                    {name} :
                </span>}
                <strong tabIndex="0" onFocus={()=>setExpand(true)} onBlur={()=>setExpand(false)} className="font-weight-500 lowercase pointer">
                    {value}
                </strong>
            </div>
            {expand && 
                <Option options={options} setValue={setValue} value={value}/>
            }
       </div>
    );
}
export default Select;