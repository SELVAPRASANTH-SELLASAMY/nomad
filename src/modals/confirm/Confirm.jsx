import { useContext, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import { RxCross2 } from "react-icons/rx";
import { AppContext } from '../../App';
function Confirm(){
    const [flash,setFlash] = useState({
        title:'',
        message:'',
        open:false
    });
    const [action,setAction] = useState(null);
    const { FlashConfirm } = useContext(AppContext);
    useImperativeHandle(FlashConfirm,() => ({
        confirm: (title,message) => {
            setFlash((prevFlash)=>({
                ...prevFlash,
                title:title,
                message:message,
                open:true
            }));
            return new Promise((resolve) => {
                setAction(() => resolve);
            });
        }
    }),[]);
    const handleConfirm = (userAction) => {
        action && action(userAction);
        setFlash((prevFlash) => ({
            ...prevFlash,
            open:false
        }));
    }
    if(flash.open){
        return ReactDOM.createPortal(
            <div className="backdrop fixed top-0 left-0 w-100 h-100 bg-overlay z-index-110 d-grid place-content-center">
                <dialog style={{boxShadow:'none',border:'.15rem groove var(--lightgrey)'}} open={flash.open} className="relative p-2 rounded-05 line-height-25rem w-min-500px bg-tile-blue-tr blur-10 text-white">
                    <span onClick={() => handleConfirm(false)} role="button" className="pointer fs-5 absolute right-05 top-05 hover-red svg-stroke-width-1">
                        <RxCross2/>
                    </span>
                    <h3 className="fs-5_5 font-weight-600">{flash.title || "Confirm Title"}</h3>
                    <p className="fs-4 text-secondary">{flash.message || "Confirm message"}</p>
                    <div className="d-flex justify-space-between gap-2 mt-05">
                        <button onClick={() => handleConfirm(true)} type="button" className="fs-4 font-weight-600 uppercase ptb-05 text-centered w-100 rounded-100px bg-green">Proceed</button>
                        <button onClick={() => handleConfirm(false)} type="button" className="fs-4 font-weight-600 uppercase ptb-05 text-centered w-100 rounded-100px bg-lgreen text-white border-green-01">Cancel</button>
                    </div>
                </dialog>
            </div>,
            document.getElementById('flash')
        );
    }
}
export default Confirm;