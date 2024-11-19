import './login.css';
import { mainContext } from './Main';
import { useContext, useState } from 'react';
import { useEvalEmail } from '../customhooks/validation';
import { debounce } from 'lodash';
function Requestaccess(){
    const setFormState = useContext(mainContext);
    const [userInput,setUserInput] = useState({
        email:''
    });
    const [formError,setFormError] = useState({
        email:''
    });
    const emailValidation = useEvalEmail(userInput.email);
    const handleEmailInput = debounce((e) => {
        setUserInput({...userInput,email:e.target.value});
    },1000);
    const validateInput = (input) => {
        setFormError({...formError,email:(input.email === '' ? 'This field is required!' : emailValidation ? '' : 'Invaid email!')});
        return emailValidation;
    }
    const handleSubmit = () => {
        if(validateInput(userInput)){
            console.log("Request sent...");
        }
    }
    return(
        <>
            <h2 className="text-primary font-weight-600 fs-8 italic">Request access!</h2>
            <h3 className="text-secondary font-weight-500 fs-5 italic">Please enter your valid email address.</h3>

            <form noValidate>
                <label htmlFor="email" className="fs-4 d-iblock mtb-1">Email</label>
                {formError.email && <p className="text-error mtb-1 fs-4 float-right">{formError.email}</p>}
                <input onChange={handleEmailInput} className='fs-4 w-100 ptb-1 plr-15 rounded-100px border-grey-01 trans-border-250 no-outline bg-tile-blue text-white' type="text" id='email' name='email' placeholder='Enter your mail id' autoComplete='off'/>

                <button onClick={handleSubmit} type='button' className='btn-primary w-100 fs-4 mt-2'>send access request</button>

                <p className='fs-4 mt-2 text-centered'>Go back to <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('login')}} className='request-access'>sign in</a></p>
            </form>
        </>
    );
}
export default Requestaccess;