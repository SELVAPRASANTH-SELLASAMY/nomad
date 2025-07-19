import { useState } from 'react';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { useEvalPassword } from '../../customhooks/validation';
import { useUpdate } from '../../customhooks/httpMethod';
import { useNavigate } from 'react-router-dom';
function PasswordSettings(){
    const [input,setInput] = useState({
        password:'',
        newPassword:'',
        confirmPassword:''
    });
    const [inputError,setInputError] = useState({
        password:'',
        newPassword:'',
        confirmPassword:''
    });

    const isValidPassword = useEvalPassword(input.password);
    const isValidNewPassword = useEvalPassword(input.newPassword);

    const navigate = useNavigate();

    const { update } = useUpdate("/updatePassword");

    const validateInput = () => {
        setInputError({...inputError,
            password:(input.password === '' ? 'This field is required!' : isValidPassword ? '' : 'Invalid password!'),
            newPassword:(input.newPassword === '' ? 'This field is required!' : isValidNewPassword ? '' : 'Password doesn\'t met the required criteria!'),
            confirmPassword:(input.confirmPassword === '' ? 'This field is required!' : input.newPassword === input.confirmPassword ? '' : 'Password\'s doesn\'t match!'),
        });
        return isValidPassword && isValidNewPassword && (input.newPassword === input.confirmPassword);
    }

    const handleSubmit = () => {
        if(validateInput()){
            update(input,() => {
                setInput({
                    password:'',
                    newPassword:'',
                    confirmPassword:''
                });
            });
        }
    }

    const handleCancel = () => {
        setInputError({password:'',newPassword:'',confirmPassword:''});
        setInput({password:'',newPassword:'',confirmPassword:''});
    }

    const InputConfig = [
        {Name:'Current Password',id:'password',type:'password',placeholder:'Enter your old password',response_message:inputError.password},
        {Name:'New Password',id:'newPassword',type:'password',placeholder:'Enter the new password',response_message:inputError.newPassword},
        {Name:'Confirm Password',id:'confirmPassword',type:'password',placeholder:'Confirm new password',response_message:inputError.confirmPassword}
    ];

    const passwordCriterias = ["Password should have more than 6 characters","Password should contain at least one Uppercase","Password should contain at least one Lowercase","Password should contain at least one numerical number","Password should contain at least one Special character"];

    return(
        <section className="mtb-05 mt-5 w-max-600">
            <p className="fs-4 font-weight-600">Password should satisfy the following criteria!</p>
            {
                passwordCriterias.map((criteria,index) => <p key={index} className="fs-3 text-secondary line-height-2rem">{criteria}.</p>)
            }
            <form noValidate>
                {
                    InputConfig.map((config,index) => (
                        <PrimaryInput
                            key={index}
                            labelName={config.Name}
                            id={config.id}
                            type={config.type}
                            placeholder={config.placeholder}
                            response_message={config.response_message}
                            value={input}
                            setValue={setInput}
                            variant="small"
                        />
                    ))
                }
                <div className="d-flex mtb-15 gap-2 row-gap-15 wrap-flex">
                    <button onClick={handleSubmit} type='button' className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Save Changes</button>
                    <button onClick={handleCancel} type='button' className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Cancel</button>
                </div>
            </form>

            <button onClick={() => navigate('/')} type="button" className="fs-4 pointer d-flex no-bg text-primary text-underline font-weight-500 mb-25">Go back</button>
        </section>
    );
}

export default PasswordSettings;