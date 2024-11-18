import './login.css';
import { mainContext } from './Main';
import { AppContext } from '../../App';
import { useContext, useState } from 'react';
import { useEvalPassword } from '../customhooks/validation';
import { debounce } from 'lodash';
function Setnewpassword(){
    const setFormState = useContext(mainContext);
    const flashMessage = useContext(AppContext);
    const [userInput,setUserInput] = useState({
        newPassword:'',
        confirmPassword:''
    });
    const [formError,setFormError] = useState({
        newPassword:'',
        confirmPassword:''
    });
    const passwordValidation = useEvalPassword(userInput.newPassword);
    const [check,setCheck] = useState(false); // For checkbox input to display password input.
    const handleNewPasswordInput = debounce((e)=>{
        setUserInput({...userInput,newPassword:e.target.value});
    },1000);
    const handleConfirmPasswordInput = debounce((e)=>{
        setUserInput({...userInput,confirmPassword:e.target.value});
    },1000);
    const validateInput = (input) => {
        const isEqual = input.newPassword === input.confirmPassword;
        setFormError({...formError,newPassword:input.newPassword === '' ? 'This field is required!' : passwordValidation ? '' : "Password doesn't meet the required criteria!",confirmPassword:input.confirmPassword === '' ? 'This field is required!' : isEqual ? '' :"Password's doesn't match!"});
        return passwordValidation && isEqual;
    }
    const handlePasswordChange = () => {
        if(validateInput(userInput)){
            //Logic to change password.
            console.log("Password changed successfully...");
            flashMessage.current.alert("success","Password changed successfully.");
        }
    }
    console.log("setNewPassword Re-Rendered...");
    return(
        <>
            <h2 className="text-primary font-weight-600 fs-8 italic">Reset password!</h2>
            <h3 className="text-secondary font-weight-500 fs-5 italic">Please enter strong password to ensure security.</h3>

            <form noValidate>
                <label htmlFor="new-password" className="fs-4 d-iblock mtb-1">New password</label>
                {formError.newPassword && <p className="text-error mtb-1 fs-4 float-right">{formError.newPassword}</p>}
                <input onChange={handleNewPasswordInput} type={check ? "text" : "password"} id='new-password' name='new-password' placeholder='Enter your new password' autoComplete='off'/>

                <label htmlFor="confirm-password" className="fs-4 d-iblock mtb-1">Confirm password</label>
                {formError.confirmPassword && <p className="text-error mtb-1 fs-4 float-right">{formError.confirmPassword}</p>}
                <input onChange={handleConfirmPasswordInput} type={check ? "text" : "password"} id='confirm-password' name='confirm-password' placeholder='Confirm your new password' autoComplete='off'/>

                <div className="d-iflex center-y">
                    <input onChange={(e)=>setCheck(e.target.checked)} type="checkbox" id='show-password' name='show-password'/>
                    <label htmlFor="show-password" className='fs-4 d-iblock mtb-1'>Show password</label>
                </div>

                <button onClick={handlePasswordChange} type='button' className='btn-primary w-100 fs-4'>Submit</button>

                <p className='fs-4 mt-2 text-centered'>Go back to <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('login')}} className='request-access'>sign in</a></p>
            </form>
        </>
    );
}
export default Setnewpassword;