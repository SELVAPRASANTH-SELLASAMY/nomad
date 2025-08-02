import { forwardRef, useImperativeHandle, useState } from "react";
import PrimaryInput from "../../sharedUi/PrimaryInput";
import { useEvalEmail , useEvalName } from '../../customhooks/validation';
import { usePost } from "../../customhooks/httpMethod";
import { Select } from "../../sharedUi/select";
function AddUser({setUsers},ref){
    const [input,setInput] = useState({
        name:'',
        email:''
    });

    const [role,setRole] = useState("standard user");

    const [inputError,setInputError] = useState({
        name:'',
        email:'',
    });

    const [Modal,displayModal] = useState(false);

    const isValidName = useEvalName(input.name);
    const isValidEmail = useEvalEmail(input.email);

    const { post } = usePost('signup');

    useImperativeHandle(ref,() => ({
        showModal: () => displayModal(true),
        close: () => displayModal(false)
    }),[]);

    const validateInput = () => {
        setInputError({...inputError,
            name:(input.name === '' ? 'This field is required!' : isValidName ? '' : 'Invalid user name!'),
            email:(input.email === '' ? 'This field is required!' : isValidEmail ? '' : 'Invalid email!')
        });
        return isValidName && isValidEmail;
    }

    const handleSubmit = () => {
        if(validateInput()){
            post({...input,role},(res) => {
                if(res?.data){
                    setUsers(prevState => ([...prevState,res.data]));
                    setInput({name:'',email:''});
                    ref.current.close();
                }
            },false);
        }
    }

    const handleCancel = () => {
        setInputError({name:'',email:''});
        setInput({name:'',email:''});
        ref.current.close();
    }

    const inputConfig = [
        {id:"name",Name:"Name",type:"text",placeholder:"Enter user's name",response_message:inputError.name},
        {id:"email",Name:"Email",type:"email",placeholder:"Enter user's email id",response_message:inputError.email},
    ];

    if(!Modal) return null;

    return(
        <div className="fixed top-0 bottom-0 left-0 right-0 z-index-100 bg-overlay d-flex">
            <form noValidate className="w-max-600 text-white bg-tile-blue-tr blur-10 ptb-1 plr-15 rounded-05 border-grey-01 mtb-auto mlr-auto mlr-1_L_650">
            <h3 className="fs-5 font-weight-600">Add new user</h3>
                {
                    inputConfig.map((config,index) => (
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
                            customStyle={{backgroundColor:"var(--black-pearl)"}}
                        />
                    ))
                }
                <label htmlFor='role' className="fs-4 d-iblock mb-05 mt-1">Role</label>
                <Select
                    options={["standard user","admin"]}
                    value={role}
                    setValue={setRole}
                    Styles={"bg-tile-blue-tr ptb-05 plr-1"}
                    fullWidth
                />
                <button onClick={handleSubmit} type='button' className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase mtb-15">Save</button>
                <button onClick={handleCancel} type='button' className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01 mtb-15 ml-2">Cancel</button>
            </form>
        </div>
    );
}

export default forwardRef(AddUser);