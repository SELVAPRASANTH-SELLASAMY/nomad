import { MdOutlineMail } from "react-icons/md";
import Input from "./Input";
import { useState } from "react";
import { isValidEmail, isValidOTP } from "../utils/validations";
function ForgotPassword({handleCurrentPageNavigation}){
    const [credentials,setCredentials] = useState({
        email: '',
        otp: ''
    });

    const [credentialError,setCredentialError] = useState({
        email: '',
        otp: ''
    });

    const [isOTPFieldDisabled,disableOTPField] = useState(true);

    const passwordResetFields = [
        {label:'email',type:'email',id:'email',placeholder:'Enter your registered email id',icon:<MdOutlineMail/>,required:true},
        {label:'One time password',type:'otp',id:'otp',required:true,disabled:isOTPFieldDisabled}
    ];

    const handleOTPRequest = () => {
        const isEmailValid = credentials.email && isValidEmail(credentials.email);
        const isOTPValid = credentials.otp && isValidOTP(credentials.otp);
        setCredentialError({
            ...credentialError,
            email: credentials.email === '' ? 'This field is required' : isEmailValid ? '' : 'Invalid email address',
            otp: credentials.otp === '' ? 'This field is required' : isOTPValid ? '' : 'Invalid OTP'
        });

        if(isEmailValid && isOTPValid){
            // Logic to send OTP request to server
        }
    }

    const handleOTPVerification = () => {
        // Logic to send server request to verify the entered otp
        console.log("Verifying OTP...");
    }

    return(
        <form noValidate>
            {
                passwordResetFields.map((field,index) => (
                    <Input
                        key={index}
                        label={field.label}
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        icon={field.icon}
                        required={field.required}
                        input={credentials}
                        setInput={setCredentials}
                        error={credentialError}
                        disabled={field.disabled}
                    />
                ))
            }

            <p className="fs-sm center my-lg">Not yet received OTP? <br /> 
                <a href="#" role="button" className="no-decoration primary lh-sm">Resend</a> or <a href="#" role="button" className="no-decoration primary lh-sm">Use different email</a>
            </p>

            <button 
                type="button"
                className="fs-sm py-lg w-full rounded-md uppercase bg-green bold-md no-border"
                onClick={isOTPFieldDisabled ? handleOTPRequest : handleOTPVerification}
            >
                {isOTPFieldDisabled ? 'Get OTP' : 'Submit'}
            </button>

            <p className="fs-sm center my-lg">Go back to <a href="#" role="button" className="no-decoration primary lh-sm" data-target-page="login" onClick={handleCurrentPageNavigation}>sign in</a></p>
        </form>
    );
}

export default ForgotPassword;