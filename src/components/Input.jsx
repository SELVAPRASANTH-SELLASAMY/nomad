import { useRef } from "react";

function Input({label,type,id,placeholder,icon,required,input,setInput,error,disabled}){
    const handleChange = (e) => {
        setInput((inputs) => ({...inputs, [id]:e.target.value}));
    }

    const OTPInputRef = useRef([]);

    const handleOtpInput = (target,index) => {
        const position = target.value ? index + 1 : index - 1;
        if(position >= 0 && position <= 5) OTPInputRef.current[position].focus();
        setInput({
            ...input,
            [id]: OTPInputRef.current.map((input) => input.value).toString().replaceAll(",","")
        });
    }

    return(
        <>
            <label htmlFor={id} className={`fs-sm my-lg d-inline-block ${disabled ? 'opacity-60' : ''}`}>{label}</label>
            {
                (error && error[id] && !disabled) ? <p className="text-error float-right my-lg">{error[id]}!</p> : null
            }
            {
                type !== 'otp' ?
                <div className="d-flex items-center border-sm-gray border-green-focus border-transition-250 rounded-md no-overflow bg-tile-blue">
                    {icon && <span className="fs-lg bold-md d-inline-flex px-md secondary">
                        {icon}
                    </span>}
                    <input 
                        type={type}
                        id={id} 
                        value={input[id]}
                        className={`w-full secondary placeholder-text-secondary fs-sm py-lg no-outline no-border no-background pr-lg ${!icon ? 'pl-lg' : ''} ${disabled ? 'opacity-60': ''}`}
                        placeholder={placeholder}
                        required={required}
                        onChange={handleChange}
                        autoComplete="false"
                        disabled={disabled}
                    />
                </div> :
                
                <div className="d-flex space-between max-w-450">
                    {
                        Array.from({length: 6},(_,index) => (
                            <input 
                                key={index} 
                                type="text" 
                                inputMode="numeric" 
                                maxLength="1"
                                id={`otp${index === 0 ? '' : `_${index}`}`}
                                className={`secondary placeholder-text-secondary fs-sm py-lg no-outline px-lg bg-tile-blue rounded-md border-sm-gray border-green-focus ratio-equal w-3_5 center ${disabled ? 'opacity-60' : ''}`}
                                onChange={(e) => handleOtpInput(e.target,index)}
                                ref={(element) => OTPInputRef.current[index] = element}
                                disabled={disabled}
                                placeholder="0"
                            />
                        ))
                    }
                </div>
            }
        </>
    );
}

export default Input;