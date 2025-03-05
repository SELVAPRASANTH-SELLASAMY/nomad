import { useEffect, useRef, useState } from 'react';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { useEvalEmail , useEvalName } from '../../customhooks/validation';
import { useLocalStorage } from '../../customhooks/storage';
import { useUpdate } from '../../customhooks/httpMethod';
import UserAvatar from './UserAvatar';
function ProfileSettings(){
    const [input,setInput] = useState({
        name:'',
        email:'',
        image:null
    });

    const copy = useRef(null);

    const [inputError,setInputError] = useState({
        name:'',
        email:'',
    });

    const { setItem, getItem } = useLocalStorage();
    useEffect(() => {
        const item = getItem("user");
        if(item?.name && item?.email){
            setInput({
                ...input,
                name:item.name,
                email:item.email,
                image:item.image || null
            });
            copy.current = input;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const isValidName = useEvalName(input.name);
    const isValidEmail = useEvalEmail(input.email);

    const { update } = useUpdate("/update");

    const validateInput = () => {
        setInputError({...inputError,
            name:(input.name === '' ? 'This field is required!' : isValidName ? '' : 'Invalid user name!'),
            email:(input.email === '' ? 'This field is required!' : isValidEmail ? '' : 'Invalid email!')
        });
        return isValidName && isValidEmail;
    }

    const handleSubmit = () => {
        if(validateInput()){
            const data = new FormData();
            let canUpdate = false;
            Object.keys(input).forEach((key) => {
                if(input[key] !== copy.current[key]){
                    data.append(key,input[key]);
                    canUpdate = true;
                }
            });
            if(canUpdate){
                update(data,() => {
                    copy.current = input;
                    canUpdate = false;
                    setItem("user",input);
                });
            }
        }
    }

    const handleCancel = () => {
        setInputError({name:'',email:''});
        setInput({
            ...input,
            name:copy.current.name,
            email:copy.current.email,
            image:copy.current.image,
        });
    }

    const InputConfig = [
        {Name:'Name',id:'name',type:'text',placeholder:'Enter your name',response_message:inputError.name},
        {Name:'Email',id:'email',type:'email',placeholder:'Enter your email',response_message:inputError.email}
    ];

    return(
        <section className="mt-2">
            <UserAvatar/>
            <form noValidate className="mtb-1 w-max-600">
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
                <button onClick={handleSubmit} type='button' className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase mtb-15">Save Changes</button>
                <button onClick={handleCancel} type='button' className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01 mtb-15 ml-2">Cancel</button>
            </form>
            
            <button type="button" className="fs-4 pointer d-flex no-bg text-primary text-underline font-weight-500">Go back</button>
        </section>
    );
}

export default ProfileSettings;