import { debounce } from "lodash";
function PrimaryInput({labelName, id, type, placeholder, response_message, value, setValue, disabled, variant, customStyle={}}){
    const debounceFunction = (Func) => {
        return debounce(Func,1000);
    }
    const handleInput = (e) => {
        setValue((prev)=>({
            ...prev,
            [id]:e.target.value
        }));
    }
    return(
        <>
            {labelName && <label htmlFor={id} className={`fs-4 d-iblock ${disabled && "disabled-label"} ${variant === "small" ? 'mb-05 mt-1' : 'mtb-1'}`}>{labelName}</label>}
            {response_message && <p className={`text-error fs-4 float-right ${variant === "small" ? 'mb-05 mt-1' : 'mtb-1'}`}>{response_message}</p>}
            <input 
                style={customStyle}
                value={value && value[id]}
                onChange={value ? handleInput : debounceFunction(handleInput)} 
                className={`fs-4 w-100 border-grey-01 trans-border-250 no-outline bg-tile-blue text-white ${id === "otp" && 'ltr-spacing-2'} ${variant === "small" ? 'ptb-05 plr-1 rounded-05' : 'ptb-1 plr-15 rounded-100px'}`}
                type={type} 
                id={id} 
                name={id}
                placeholder={placeholder} 
                autoComplete='off'
                disabled={disabled}
                maxLength={id === "otp" ? "6" : null}
            />
        </>
    );
}
export default PrimaryInput;