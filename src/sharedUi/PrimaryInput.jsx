import { debounce } from "lodash";
function PrimaryInput({labelName, id, type, placeholder, response_message, setValue, disabled}){
    const handleInput = debounce((e)=>{
        setValue((prev)=>({
            ...prev,
            [id]:e.target.value
        }));
    },1000);
    return(
        <>
            <label aria-disabled={disabled} htmlFor={id} className="fs-4 d-iblock mtb-1">{labelName}</label>
            {response_message && <p className="text-error mtb-1 fs-4 float-right">{response_message}</p>}
            <input 
                onChange={handleInput} 
                className={`fs-4 w-100 ptb-1 plr-15 rounded-100px border-grey-01 trans-border-250 no-outline bg-tile-blue text-white ${id === "otp" && 'ltr-spacing-2'}`}
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