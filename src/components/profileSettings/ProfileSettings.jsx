import { useRef, useState } from 'react';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { useEvalEmail , useEvalName } from '../../customhooks/validation';
function ProfileSettings(){
    const [input,setInput] = useState({
        name:'',
        email:'',
        image:null
    });
    const [inputError,setInputError] = useState({
        name:'',
        email:'',
    });
    const fileInputRef = useRef(null);

    const isValidName = useEvalName(input.name);
    const isValidEmail = useEvalEmail(input.email);

    const handleImgInput = (e) => {
        const img = e.target.files[0];
        if(img){
            const url = URL.createObjectURL(img);
            setInput((prev) => ({...prev,image:url}));
        }
    }

    const handleImgInputClick = () => {
        fileInputRef?.current?.click();
    }

    const handleImgDelete = () => {
        //Server logic to delete the image from the server
        setInput((prev) => ({...prev,image:null}));
    }

    const validateInput = () => {
        setInputError({...inputError,
            name:(input.name === '' ? 'This field is required!' : isValidName ? '' : 'Invalid user name!'),
            email:(input.email === '' ? 'This field is required!' : isValidEmail ? '' : 'Invalid email!')
        });
        //Server logic
        return isValidName && isValidEmail;
    }

    const handleSubmit = () => {
        validateInput();
    }

    const handleCancel = () => {
        setInputError({name:'',email:''});
        setInput({name:'',email:''}); //TODO: Have to populate existing saved password
    }

    const InputConfig = [
        {Name:'Name',id:'name',type:'text',placeholder:'Enter your name',response_message:inputError.name},
        {Name:'Email',id:'email',type:'email',placeholder:'Enter your email',response_message:inputError.email}
    ];

    return(
        <section className="mt-2">
            <div className="d-flex center-y gap-2">
                <input ref={fileInputRef} onChange={handleImgInput} type="file" accept="image/*" style={{display:"none"}}/>
                <img src={input.image} alt="" className="h-7rem aspect-ratio-equal border-green-01 rounded-100px bg-lgreen"></img>
                <button onClick={handleImgInputClick} className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Upload new picture</button>
                <button onClick={handleImgDelete} className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Delete</button>
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