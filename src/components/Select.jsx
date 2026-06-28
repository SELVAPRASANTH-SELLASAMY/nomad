import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Option from "./Option";
import { useState } from "react";
import CompactOption from "./CompactOption";
function Select({icon,label,options,defaultValue}){
    const [value,setValue] = useState(defaultValue || {label: "--Select--",value:""});
    const [sortOrder,setSortOrder] = useState(0);
    const [expand,setExpand] = useState(false);

    return(
        <div className="w-fit mt-sm md-scroll-snap-stop-always md-scroll-snap-start lg-relative">
            <div 
                className="d-flex items-center fs-sm bg-tile-blue border-sm-gray rounded-md pd-md w-fit no-wrap"
                role="combobox"
                aria-labelledby="select-label select-trigger"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="select-dropdown"
            >
                {icon && 
                    <span 
                        className={`d-flex fs-md secondary transform-transition-250 ${(label === 'Sort by' && sortOrder === 1) ? 'rotate-180' : ''}`}
                        onClick={()=> setSortOrder(1 - sortOrder)}
                    >
                        {icon}
                    </span>}
                <p className="ml-sm pr-md">
                    <span className="secondary">{label} : </span>
                    <span className="text-white capitalize">{value?.label || value}</span>
                </p>
                <span 
                    className={`d-flex fs-md secondary transform-transition-250 ${expand ? 'rotate-180' : ''}`}
                    onFocus={() => setExpand(true)}
                    onBlur={() => setExpand(false)}
                    tabIndex="0"
                >
                    <MdOutlineKeyboardArrowDown/>
                </span>
            </div>

            {
                expand &&
                <CompactOption
                    options={options}
                    selectedValue={value}
                    setValue={setValue}
                />
            }
        </div>
    );
}
export default Select;