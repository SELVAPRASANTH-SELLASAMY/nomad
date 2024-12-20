import './login.css';
import { mainContext } from './Main';
import { useContext, useState } from 'react';
import { useEvalEmail } from '../../customhooks/validation';
import PrimaryInput from '../../sharedUi/PrimaryInput';
function Requestaccess(){
    const setFormState = useContext(mainContext);
    const [userInput,setUserInput] = useState({
        email:''
    });
    const [formError,setFormError] = useState({
        email:''
    });
    const emailValidation = useEvalEmail(userInput.email);
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
                <PrimaryInput
                    labelName="Email"
                    id="email"
                    type="text"
                    placeholder="Enter your mail id"
                    response_message={formError.email}
                    setValue={setUserInput}
                />

                <button onClick={handleSubmit} type='button' className='btn-primary w-100 fs-4 mt-2'>send access request</button>

                <p className='fs-4 mt-2 text-centered'>Go back to <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('login')}} className='request-access'>sign in</a></p>
            </form>
        </>
    );
}
export default Requestaccess;