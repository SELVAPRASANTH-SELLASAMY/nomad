import { MdOutlineMail, MdOutlineLock } from "react-icons/md";
import Input from "./Input";
import { useState } from "react";
import { isValidEmail, isValidPassword } from "../utils/validations";
import Checkbox from "./CheckBox";
function Login({handleCurrentPageNavigation}){
    const [credentials,setCredentials] = useState({
        email: '',
        password: ''
    });

    const [credentialError, setCredentialError] = useState({
        email: '',
        password: ''
    });

    const [check,setCheck] = useState(false);

    const loginFields = [
        {label:'email',type:'email',id:'email',placeholder:'enter your email id',icon:<MdOutlineMail/>,required:true},
        {label:'password',type:`${check ? 'text':'password'}`,id:'password',placeholder:'enter your password',icon:<MdOutlineLock/>,required:true}
    ];

    const handleSignIn = () => {
        const isEmailValid = credentials.email && isValidEmail(credentials.email);
        const isPasswordValid = credentials.password && isValidPassword(credentials.password);

        setCredentialError({
            ...credentialError,
            email: isEmailValid ? '' : credentials.email === '' ? 'This field is required' :  'Invalid email address',
            password: isPasswordValid ? '' : credentials.password === '' ? 'This field is required' : 'Invalid Password'
        });
            
        if(isEmailValid && isPasswordValid){
            // SignIn request to server
        }
    }

    return(
        <form noValidate>
            {
                loginFields.map((field,index) => (
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

            <a href="#" role="button" id="forgot-password" className="primary fs-sm float-right my-lg no-decoration" data-target-page="forgot-password" onClick={handleCurrentPageNavigation}>Forgot password?</a>

            <button 
                type="button"
                className="fs-sm py-lg w-full rounded-md uppercase bg-green bold-md no-border"
                onClick={handleSignIn}
            >
                Sign In
            </button>

            <p className="fs-sm center my-lg">Don't have an account? <br /> <a href="#" role="button" className="no-decoration primary lh-sm" data-target-page="request-access" onClick={handleCurrentPageNavigation}>Request access</a></p>
        </form>
    );
}

export default Login;