import './login.css';
import { mainContext } from './Main';
import { useContext, useState } from 'react';
import { useEvalEmail, useEvalPassword } from '../customhooks/validation';
import { debounce } from 'lodash';
import PrimaryInput from '../../sharedUi/PrimaryInput';
function Login(){
    const setFormState = useContext(mainContext);
    const [formError,setFormError] = useState({
        email: '',
        password: ''
    });
    const [check,setCheck] = useState(false); // For checkbox input to display password input.
    const [userInput,setUserInput] = useState({
        email:'',
        password:''
    });
    const emailValidation = useEvalEmail(userInput.email);
    const passwordValidation = useEvalPassword(userInput.password);
    const validateInput = (input) => {
        setFormError({...formError,email:(input.email === '' ? 'This field is required!' : emailValidation ? '' : 'Invaid email!'),password:(input.password === '' ? 'This field is required!' : passwordValidation ? '' : 'Invalid password!')});
        return emailValidation && passwordValidation;
    }
    const handleEmailInput = debounce((e)=>{
        setUserInput({...userInput,email:e.target.value});
    },1000);
    const handlePasswordInput = debounce((e)=>{
        setUserInput({...userInput,password:e.target.value});
    },1000);
    const handleLogin = () => {
        if(validateInput(userInput)){
            console.log("Logged in...");
            //TODO: Write a login logic here.
        }
    }
    console.log("Login component Re-Rendered...");
    return(
        <>
            <h2 className="text-primary font-weight-600 fs-8 italic">Welcome back!</h2>
            <h3 className="text-secondary font-weight-500 fs-5 italic">Please login to manage all your blogs.</h3>

            <form noValidate>
                <PrimaryInput
                    labelName="Email"
                    id="email"
                    type="text"
                    placeholder="Enter your mail id"
                    response_message={formError.email}
                    inputHandler={handleEmailInput}
                />

                <PrimaryInput
                    labelName="Password"
                    id="password"
                    type={check ? 'text' : 'password'}
                    placeholder="Enter your mail id"
                    response_message={formError.password}
                    inputHandler={handlePasswordInput}
                />

                <div className="d-iflex center-y">
                    <input onChange={(e)=>setCheck(e.target.checked)} type="checkbox" id='show-password' name='show-password'/>
                    <label htmlFor="show-password" className='fs-4 d-iblock mtb-1'>Show password</label>
                </div>
                <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('reset_password')}} className="fs-4 float-right d-iblock mtb-1">Forgot password?</a>

                <button onClick={handleLogin} type='button' className='btn-primary w-100 fs-4'>sign in</button>

                <p className='fs-4 mt-2 text-centered'>Don't have an account? <a href="/" role='button' onClick={(e)=>{e.preventDefault(); setFormState('request_access')}} className='request-access'>Request access</a></p>
            </form>
        </>
    );
}
export default Login;