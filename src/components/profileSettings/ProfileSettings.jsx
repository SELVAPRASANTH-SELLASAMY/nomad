import { useState } from 'react';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { useEvalPhone, useEvalEmail , useEvalUserName } from '../../customhooks/validation';
function ProfileSettings(){
    const [input,setInput] = useState({
        userName:'',
        email:'',
        phone:''
    });
    const [inputError,setInputError] = useState({
        userName:'',
        email:'',
        phone:''
    });

    const isValidUserName = useEvalUserName(input.userName);
    const isValidEmail = useEvalEmail(input.userName);
    const isValidPhone = useEvalPhone(input.phone);

    const validateInput = () => {
        setInputError({...inputError,
            userName:(input.userName === '' ? 'This field is required!' : isValidUserName ? '' : 'Invalid user name!'),
            email:(input.email === '' ? 'This field is required!' : isValidEmail ? '' : 'Invalid email!'),
            phone:(input.phone === '' ? 'This field is required!' : isValidPhone ? '' : 'Invalid phone number!')
        });
        //Server logic
        return isValidUserName && isValidEmail && isValidPhone;
    }

    const handleSubmit = () => {
        validateInput();
    }

    const handleCancel = () => {
        setInputError({userName:'',email:'',phone:''});
        setInput({userName:'',email:'',phone:''}); //TODO: Have to populate existing saved password
    }

    const InputConfig = [
        {Name:'User Name',id:'userName',type:'text',placeholder:'Enter the username',response_message:inputError.userName},
        {Name:'Email',id:'email',type:'email',placeholder:'Enter your email',response_message:inputError.email},
        {Name:'Phone Number',id:'phone',type:'tel',placeholder:'Enter your phone number',response_message:inputError.phone}
    ];

    return(
        <section className="mt-2">
            <div className="d-flex center-y gap-2">
                <canvas className="h-7rem aspect-ratio-equal border-green-01 rounded-100px bg-lgreen"></canvas>
                <button className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Upload new picture</button>
                <button className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Delete</button>
            </div>
            <div className="mtb-1 w-max-600">
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
            </div>
        </section>
    );
}

export default ProfileSettings;