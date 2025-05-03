import { mainContext } from './Main';
import { useContext, useState } from 'react';
import { useEvalEmail, useEvalPassword } from '../../customhooks/validation';
import { usePost } from '../../customhooks/httpMethod';
import { useNavigate } from 'react-router-dom';
import PrimaryInput from '../../sharedUi/PrimaryInput';
function Login(){
    const setFormState = useContext(mainContext);
    const { post } = usePost('/signin');
    const navigate = useNavigate();
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
    const handleLogin = () => {
        if(validateInput(userInput)){
            post(userInput,() => {
                navigate("/",{replace: true});
            },false);
        }
    }
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
                    setValue={setUserInput}
                />

                <PrimaryInput
                    labelName="Password"
                    id="password"
                    type={check ? 'text' : 'password'}
                    placeholder="Enter your password"
                    response_message={formError.password}
                    setValue={setUserInput}
                />

                <div className="d-iflex center-y">
                    <input onChange={(e)=>setCheck(e.target.checked)} type="checkbox" id='show-password' name='show-password'/>
                    <label htmlFor="show-password" className='fs-4 mtb-1 pointer'>Show password</label>
                </div>
                <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('reset_password')}} className="fs-4 float-right d-iblock mtb-1">Forgot password?</a>

                <button onClick={handleLogin} type='button' className='btn-primary w-100 fs-4'>sign in</button>

                <p className='fs-4 mt-2 text-centered'>Don't have an account? <a href="/" role='button' onClick={(e)=>{e.preventDefault(); setFormState('request_access')}} className='request-access'>Request access</a></p>
            </form>
        </>
    );
}
export default Login;