import { MdOutlineLock, MdOutlinePassword } from "react-icons/md";
import Input from "./Input";
import Checkbox from "./CheckBox";
import { useState } from "react";
import { isValidPassword } from "../utils/validations";
function ResetPassword({handleCurrentPageNavigation}){
    const [credentials,setCredentials] = useState({
        password: '',
        confirmPassword: ''
    });

    const [credentialError,setCredentialError] = useState({
        password: '',
        confirmPassword: ''
    });

    const [check,setCheck] = useState(false);

    const passwordResetFields = [
        {label:'password',type: check ? 'text' :'password',id:'password',placeholder:'enter new password',icon:<MdOutlineLock/>,required:true},
        {label:'confirm password',type: check ? 'text' : 'password',id:'confirmPassword',placeholder:'confirm new password',icon:<MdOutlinePassword/>,required:true},
    ];

    const handlePasswordChange = () => {
        const isPasswordvalid = credentials.password && isValidPassword(credentials.password);
        const isPasswordsEqual = credentials.password === credentials.confirmPassword;
        setCredentialError({
            ...credentialError,
            password: credentials.password === '' ? 'This field is required' : isPasswordvalid ? '' : 'Invalid Password',
            confirmPassword: credentials.confirmPassword === '' ? 'This field is required' : isPasswordsEqual ? '' : 'Passwwords do not match'
        });

        if(isPasswordvalid && isPasswordsEqual){
            // Logic to send server request for password update
        }
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
                    />
                ))
            }

            <Checkbox
                check={check}
                setCheck={setCheck}
            />

            <button 
                type="button"
                className="fs-sm py-lg w-full rounded-md uppercase bg-green bold-md no-border"
                onClick={handlePasswordChange}
            >
                Change Password
            </button>

            <p className="fs-sm center my-lg">Go back to <a href="#" role="button" className="no-decoration primary lh-sm" data-target-page="login" onClick={handleCurrentPageNavigation}>sign in</a></p>
        </form>
    );
}

export default ResetPassword;