import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BiSolidErrorAlt } from "react-icons/bi";
import { useAlert } from "../store/zustandStore";
function Alert(){
    const ModalRef = useRef(null);

    const { message, success, open } = useAlert();

    useEffect(() => {
        open ? ModalRef.current?.showModal() : ModalRef.current?.close();
    },[open]);

    if(open){
        return ReactDOM.createPortal(
            <dialog ref={ModalRef} style={{border:'.15rem groove var(--lightgrey)'}} className={`ml-auto mt-2 mr-2 mt-1_L_500 mr-1_L_500 bg-tile-blue-tr blur-10 plr-15 ptb-1 w-min-400px w-min-0_L_500 rounded-05 no-outline text-white gap-1 ${open && "d-flex"}`}>
                <span style={{color:`${success ? 'var(--green)' : '#eb2f06'}`}} className="fs-8 middle">
                    {success ? <IoShieldCheckmarkSharp/> : <BiSolidErrorAlt/>}
                </span>
                <div>
                    <h2 style={{color:`${success ? 'var(--green)' : '#eb2f06'}`}} className="fs-5_5 font-weight-600 text-primary">{success ? "Success" : "Error"}!</h2>
                    <p className="fs-4 text-secondary">{message}</p>
                </div>
            </dialog>
            ,
            document.getElementById('flash')
        );
    }
}

export default Alert;