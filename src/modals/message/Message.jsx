import ReactDOM from 'react-dom';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BiSolidErrorAlt } from "react-icons/bi";
import { useContext, useImperativeHandle, useState } from 'react';
import { AppContext } from '../../App';
function Message(){
    const [flash,setFlash] = useState({
        message:'',
        success:false,
        open:false
    });
    const { FlashMsg } = useContext(AppContext);
    useImperativeHandle(FlashMsg,() => ({
        show: (message,success=true) => {
            setFlash((prevFlash) => ({
                ...prevFlash,
                message:message,
                success:success,
                open:true
            }));
            setTimeout(()=>{
                setFlash((prevFlash) => ({
                    ...prevFlash,
                    open:false
                }));
            },3000);
        }
    }),[]);
    if(flash.open){
        return ReactDOM.createPortal(
            <dialog style={{boxShadow:'none',border:'.15rem groove var(--lightgrey)'}} open={flash.open} className="flashmessage absolute top-05 right-05 ptb-1 plr-25 rounded-05 w-min-500px bg-tile-blue blur-10 text-white z-index-100 center-y d-grid">
                <div style={{color:`${flash.success ? 'var(--green)' : '#eb2f06'}`}} className="status-image d-flex center-y">
                    {flash.success ? <IoShieldCheckmarkSharp/> : <BiSolidErrorAlt/>}
                </div>
                <h3 style={{color:`${flash.success ? 'var(--green)' : '#eb2f06'}`}} className="fs-5_5 font-weight-600 uppercase">{flash.success ? 'success' : 'error'}!</h3>
                <p className="fs-4 text-secondary">{flash.message || "Message"}!</p>
            </dialog>,
            document.getElementById('flash')
        );
    }
}
export default Message;