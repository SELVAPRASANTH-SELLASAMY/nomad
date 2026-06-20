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
                        key={option.value} 
                        className="pd-md" 
                        role="option" 
                        aria-selected={selectedValue?.value === option?.value} 
                        value={option.value}
                        onMouseDown={() => setValue(option)}
                    >
                        {option.label}
                    </li>
                ))
            }
        </ul>
    );
}

export default Option;