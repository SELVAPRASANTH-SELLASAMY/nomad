import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FaCircleExclamation } from "react-icons/fa6";
import { useConfirm } from "../store/zustandStore";
function Confirm(){
    const ModalRef = useRef(null);

    const { title, message, open, confirm } = useConfirm(state => state);

    useEffect(() => {
        open ? ModalRef.current?.showModal() : ModalRef.current?.close();
    },[open]);
    
    if(open){
        return ReactDOM.createPortal(
            <dialog ref={ModalRef} style={{border:'.15rem groove var(--lightgrey)', margin:'auto'}} className="ptb-15 plr-25 rounded-05 bg-tile-blue-tr blur-10 text-white text-centered no-outline line-height-2_5rem">
                <span className="fs-6 text-primary">
                    <FaCircleExclamation/>
                </span>
                <h2 className="fs-5_5 font-weight-600">{title || "Are you sure want to proceed"}?</h2>
                <p className="fs-4 text-secondary">{message || "Changes can't be undone"}</p>
                <div className="d-flex justify-center gap-2 gap-1_L_425 mt-1 mb-05">
                    <button onClick={() => confirm(true)} className="uppercase fs-4 font-weight-500 ptb-025 plr-25 plr-15_L_400 rounded-100px bg-green pointer">Proceed</button>
                    <button onClick={() => confirm(false)} className="uppercase fs-4 font-weight-500 text-white ptb-025 plr-25 plr-15_L_400 rounded-100px bg-lgreen border-green-01 pointer">Cancel</button>
                </div>
            </dialog>
            ,
            document.getElementById('flash')
        );
    }
}

export default Confirm;