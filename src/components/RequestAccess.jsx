import { MdOutlineMail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Input from "./Input";
import { useState } from "react";
import { isValidName, isValidEmail } from "../utils/validations";

const accessRequestFields = [
    {label:'Name',type:'text',id:'name',placeholder:'enter your fullname',icon:<MdOutlineDriveFileRenameOutline/>,required:true},
    {label:'email',type:'email',id:'email',placeholder:'enter your email id',icon:<MdOutlineMail/>,required:true}
];

function RequestAccess({handleCurrentPageNavigation}){
    const [credentials,setCredentials] = useState({
        name: '',
        email: ''
    });

    const [credentialError,setCredentialError] = useState({
        name: '',
        email: ''
    });

    const handleRequest = () => {
        const isNameValid = credentials.name && isValidName(credentials.name);
        const isEmailValid = credentials.email && isValidEmail(credentials.email);

        setCredentialError({
            ...credentialError,
            name: credentials.name === '' ? 'This field is required' : isNameValid ? '' : 'Invalid name',
            email: credentials.email === '' ? 'This field is required' : isEmailValid ? '' : 'Invalid email address'
        });

        if(isNameValid && isEmailValid){
            // Logic to send access request to server
        }
    }

    return(
        <form noValidate>
            {
                accessRequestFields.map((field,index) => (
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

            <button 
                type="button"
                className="fs-sm py-lg w-full rounded-md uppercase bg-green bold-md no-border mt-xl"
                onClick={handleRequest}
            >
                Send Request
            </button>

            <p className="fs-sm center my-lg">Already have an account? <br /> <a href="#" role="button" className="no-decoration primary lh-sm" data-target-page="login" onClick={handleCurrentPageNavigation}>Sign in</a></p>
        </form>
    );
}

export default RequestAccess;