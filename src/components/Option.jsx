function Option({options,selectedValue,setValue}){
    return(
        <ul 
            id="select-dropdown"
            className="mt-sm no-list bg-tile-blue border-sm-gray rounded-md lg-absolute w-full"
            role="listbox"
            aria-labelledby="select-label"
        >
            {
                options.map(option => (
                    <li 
                        key={option.value || option} 
                        className="pd-md md-pd-lg capitalize hover-dark-bg md-option-selection-indicator md-border-bottom" 
                        role="option" 
                        aria-selected={((selectedValue?.value && option?.value) && (selectedValue?.value === option?.value)) || selectedValue === option} 
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