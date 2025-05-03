import { mainContext } from './Main';
import { useContext, useRef, useState } from 'react';
import { useEvalEmail, useEvalName } from '../../customhooks/validation';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { usePost } from '../../customhooks/httpMethod';
function Requestaccess(){
    const setFormState = useContext(mainContext);
    const { post } = usePost("/signup");
    const [userInput,setUserInput] = useState({
        name:'',
        email:''
    });
    const [formError,setFormError] = useState({
        name:'',
        email:''
    });
    const InputForm = useRef();
    const nameValidation = useEvalName(userInput.name);
    const emailValidation = useEvalEmail(userInput.email);
    const validateInput = (input) => {
        setFormError({...formError,name:(input.name === '' ? 'This field is required!' : nameValidation ? '' : 'Invalid name!'),email:(input.email === '' ? 'This field is required!' : emailValidation ? '' : 'Invalid email!')});
        return nameValidation && emailValidation;
    }
    const handleSubmit = () => {
        if(validateInput(userInput)){
            post(userInput,() => {
                setUserInput({name:'',email:''});
                InputForm.current.reset();
            },false);
        }
    }
    return(
        <>
            <h2 className="text-primary font-weight-600 fs-8 italic">Request access!</h2>
            <h3 className="text-secondary font-weight-500 fs-5 italic">Please enter your valid email address.</h3>

            <form ref={InputForm} noValidate>
                <PrimaryInput
                    labelName="Name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    response_message={formError.name}
                    setValue={setUserInput}
                />
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