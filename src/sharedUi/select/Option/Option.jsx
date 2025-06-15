function Option({options,actions,setValue,value}){
    const opts = options || actions;
    return(
        <ul id="OptionList" role="listbox" className="w-100 bg-tile-blue bg-tile-blue-tr_L_768 blur-10_L_768 list-style-none fs-4 border-grey-01 hide-overflow rounded-05 mt-025 absolute static_L_768 left-0">
            {opts &&
                opts.map((option,index)=>(
                    <li onMouseDown={()=>setValue(option)} role="option" aria-selected={(option.name) ? (option.name === value.name) : (option.value) ? (option.value === value.value) : (value === option)} key={index} className="hover-blue plr-1 ptb-05 capitalize pointer d-flex gap-05">
                        {
                            option.icon && 
                            <span className="fs-4 d-flex center-y">
                                {option.icon}
                            </span>
                        }
                        {option.name || option.label || option}
                    </li>
                ))
            }
        </ul>
    );
}
export default Option;