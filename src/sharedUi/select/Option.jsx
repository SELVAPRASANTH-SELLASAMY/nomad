function Option({options,actions,setValue,value}){
    const opts = options || actions;
    return(
        <ul id="OptionList" role="listbox" className="w-100 bg-tile-blue list-style-none fs-4 border-grey-01 hide-overflow rounded-05 mt-025 absolute left-0">
            {opts &&
                opts.map((option,index)=>(
                    <li onMouseDown={()=>setValue(option.name || option)} role="option" aria-selected={value === (option.name || option)} key={index} className="hover-blue plr-1 ptb-025 cap-first-letter pointer d-flex gap-05">
                        {
                            option.icon && 
                            <span className="fs-4 mt-025">
                                {option.icon}
                            </span>
                        }
                        {option.name || option}
                    </li>
                ))
            }
        </ul>
    );
}
export default Option;