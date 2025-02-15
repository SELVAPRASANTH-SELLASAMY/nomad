import { useState } from 'react';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { useEvalPassword } from '../../customhooks/validation';
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

    const validateInput = () => {
        setInputError({...inputError,
            password:(input.password === '' ? 'This field is required!' : isValidPassword ? '' : 'Invalid password!'),
            newPassword:(input.newPassword === '' ? 'This field is required!' : isValidNewPassword ? '' : 'Password doesn\'t met the required criteria!'),
            confirmPassword:(input.confirmPassword === '' ? 'This field is required!' : input.newPassword === input.confirmPassword ? '' : 'Password\'s doesn\'t match!'),
        });
        //Server logic
        return isValidPassword && isValidNewPassword && (input.newPassword === input.confirmPassword);
    }

    const handleSubmit = () => {
        validateInput();
    }

    const handleCancel = () => {
        setInputError({password:'',newPassword:'',confirmPassword:''});
        setInput({password:'',newPassword:'',confirmPassword:''}); //TODO: Have to populate existing saved password
    }

    const InputConfig = [
        {Name:'Current Password',id:'currentPassword',type:'password',placeholder:'Enter your old password',response_message:inputError.password},
        {Name:'New Password',id:'newPassword',type:'password',placeholder:'Enter the new password',response_message:inputError.newPassword},
        {Name:'Confirm Password',id:'confirmPassword',type:'password',placeholder:'Confirm new password',response_message:inputError.confirmPassword}
    ];

    const passwordCriterias = ["Password should have more than 6 characters","Password should contain at least one Uppercase","Password should contain at least one Lowercase","Password should contain at least one numerical number","Password should contain at least one Special character"];

    return(
        <section className="mtb-05 w-max-600">
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
                            setValue={setInput}
                            variant="small"
                        />
                    ))
                }
                <button onClick={handleSubmit} type='button' className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase mtb-15">Save Changes</button>
                <button onClick={handleCancel} type='button' className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01 mtb-15 ml-2">Cancel</button>
            </form>

            <button type="button" className="fs-4 pointer d-flex no-bg text-primary text-underline font-weight-500">Go back</button>
        </section>
    );
}

export default PasswordSettings;