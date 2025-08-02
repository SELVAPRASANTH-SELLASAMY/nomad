import { mainContext } from './Main';
import { useContext, useRef, useState } from 'react';
import { useEvalEmail, useEvalotp } from '../../customhooks/validation';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { usePost } from '../../customhooks/httpMethod';
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

    const request = usePost("requestOtp");
    const validate = usePost("validateOtp");

    const [enableOtp,setEnableOtp] = useState(false);
    const emailValidation = useEvalEmail(userInput.email);
    const otpValidation = useEvalotp(userInput.otp);
    const resetPasswordForm = useRef();

    const sendOTP = () => {
        setFormError({...formError,email:userInput.email === '' ? 'This field is required!' : emailValidation ? '' : 'Invalid email!'});
        if(emailValidation){
            request.post({email: userInput.email},() => {
                setEnableOtp(true);
            },false);
        }
    }

    const handlePasswordReset = () => {
        setFormError({...formError,otp:userInput.otp === '' ? 'This field is required!' : otpValidation ? '' : 'Invalid OTP!'});
        if(otpValidation){
            validate.post({email: userInput.email, otp: userInput.otp},() => {
                setFormState('set_new_password');
            },false);
        }
    }

    const handleFormreset = () => {
        setUserInput({...userInput,email:'',otp:''});
        setFormError({...formError,email:'',otp:''});
        setEnableOtp(false);
    }

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
                    setValue={setUserInput}
                />

                <PrimaryInput
                    labelName="One time password"
                    id="otp"
                    type="text"
                    placeholder="Enter OTP that you received in your mail"
                    response_message={formError.otp}
                    setValue={setUserInput}
                    disabled={!enableOtp}
                />

                <p className='fs-4 d-iblock mtb-1'>Not received the OTP yet? <a href='/' role='button' onClick={(e) => {e.preventDefault();sendOTP()}}>Resend</a> or <a href="/" role='button' onClick={(e)=>{e.preventDefault(); resetPasswordForm.current.reset()}}>Use a different email</a></p>

                <button type='button' onClick={() => enableOtp ? handlePasswordReset() : sendOTP()} className='btn-primary w-100 fs-4'>{enableOtp ? 'submit' : 'get otp'}</button>

                <p className='fs-4 mt-2 text-centered'>Go back to <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('login')}} className='request-access'>sign in</a></p>
            </form>
        </>
    );
}

export default Resetpassword;