function Option({options,selectedValue,setValue}){
    return(
        <ul 
            id="select-dropdown"
            className="mt-sm no-list bg-tile-blue border-sm-gray rounded-md"
            role="listbox"
            aria-labelledby="select-label"
        >
            {
                options.map(option => (
                    <li 
                        key={option.value || option} 
                        className="pd-md capitalize" 
                        role="option" 
                        aria-selected={selectedValue?.value === option?.value || selectedValue === option} 
                        value={option.value || option}
                        onMouseDown={() => setValue(option)}
                    >
                        {option.label || option}
                    </li>
                ))
            }
        </ul>
    );
}

export default Option;