import './login.css';
import { mainContext } from './Main';
import { useContext, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { useEvalEmail, useEvalotp } from '../customhooks/validation';
import PrimaryInput from '../../sharedUi/PrimaryInput';
function Resetpassword() {
    const setFormState = useContext(mainContext);
    const [userInput,setUserInput] = useState({
        email:'',
        otp:''
    });
    const [formError,setFormError] = useState({
        email:'',
        otp:''
    });
    const [enableOtp,setEnableOtp] = useState(false);
    const emailValidation = useEvalEmail(userInput.email);
    const otpValidation = useEvalotp(userInput.otp);
    const resetPasswordForm = useRef();
    const handleEmailInput = debounce((e)=>{
        setUserInput({...userInput,email:e.target.value});
    },1000);
    const handleOtpInput = debounce((e)=>{
        setUserInput({...userInput,otp:e.target.value});
    },1000);
    const resendOtp = (e) => {
        e.preventDefault();
        //Logic to resend OTP;
        console.log("Logic to resend otp");
    }
    const sendOTP = () => {
        //logic to send OTP
        setFormError({...formError,email:userInput.email === '' ? 'This field is required!' : emailValidation ? '' : 'Invalid email!'});
        if(emailValidation){
            return setEnableOtp(true);
        }
    }
    const handlePasswordReset = () => {
        setFormError({...formError,otp:userInput.otp === '' ? 'This field is required!' : otpValidation ? '' : 'Invalid OTP!'});
        if(otpValidation){
            return setFormState('set_new_password');
        }
    }
    const handleFormreset = () => {
        setUserInput({...userInput,email:'',otp:''});
        setFormError({...formError,email:'',otp:''});
        setEnableOtp(false);
    }
    console.log("Reset-password field re-redered...");
    return(
        <>
            <h2 className="text-primary font-weight-600 fs-8 italic">Reset password!</h2>
            <h3 className="text-secondary font-weight-500 fs-5 italic">Please enter your email to reset your password.</h3>

            <form onReset={handleFormreset} ref={resetPasswordForm} noValidate>
                <PrimaryInput
                    labelName="Email"
                    id="email"
                    type="text"
                    placeholder="Enter your mail id"
                    response_message={formError.email}
                    inputHandler={handleEmailInput}
                />

                <PrimaryInput
                    labelName="One time password"
                    id="otp"
                    type="text"
                    placeholder="Enter OTP that you received in your mail"
                    response_message={formError.otp}
                    inputHandler={handleOtpInput}
                    disabled={!enableOtp}
                />

                <p className='fs-4 d-iblock mtb-1'>Not received the OTP yet? <a href='/' role='button' onClick={(e)=>resendOtp(e)}>Resend</a> or <a href="/" role='button' onClick={(e)=>{e.preventDefault(); resetPasswordForm.current.reset()}}>Use a different email</a></p>

                <button type='button' onClick={() => enableOtp ? handlePasswordReset() : sendOTP()} className='btn-primary w-100 fs-4'>{enableOtp ? 'submit' : 'get otp'}</button>

                <p className='fs-4 mt-2 text-centered'>Go back to <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('login')}} className='request-access'>sign in</a></p>
            </form>
        </>
    );
}
export default Resetpassword;