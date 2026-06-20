import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Option from "./Option";
import { useState } from "react";
function Select({icon,label,options,defaultValue}){
    const [value,setValue] = useState(defaultValue || {label: "--Select--",value:""});
    const [expand,setExpand] = useState(false);

    return(
        <div className="w-fit mt-sm">
            <div 
                className="d-flex items-center fs-sm bg-tile-blue border-sm-gray rounded-md pd-md relative w-fit"
                role="combobox"
                aria-labelledby="select-label select-trigger"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="select-dropdown"
            >
                {icon && <span className="d-flex fs-md secondary">
                    {icon}
                </span>}
                <p className="ml-sm pr-2lg">
                    <span className="secondary">{label} : </span>
                    <span className="text-white capitalize">{value?.label}</span>
                </p>
                <span 
                    className="d-flex fs-md absolute right-sm secondary"
                    onFocus={() => setExpand(true)}
                    onBlur={() => setExpand(false)}
                    tabIndex="0"
                >
                    <MdOutlineKeyboardArrowDown/>
                </span>
            </div>

            {
                expand &&
                <Option
                    options={options}
                    selectedValue={value}
                    setValue={setValue}
                />
            }
        </div>
    );
}
export default Select;