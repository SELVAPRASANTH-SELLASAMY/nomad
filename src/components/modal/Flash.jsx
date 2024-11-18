import './flash.css';
import { FiCheckCircle } from "react-icons/fi";
import { BsEmojiFrown } from "react-icons/bs";
import ReactDOM from 'react-dom';
import { useContext,useImperativeHandle,useState } from 'react';
import { AppContext } from '../../structure/Main';
function Flash(){
    const flashMessage = useContext(AppContext);
    const [flash,setFlash] = useState({
        alert:false,
        type:'',
        message:''
    });
    useImperativeHandle(flashMessage,() => {
        return {
            alert : (type,message) => setFlash({...flash,alert:true,type:type,message:message})
        }
    },[flash]);
    const clearAlert = () => {
        setFlash({...flash,alert:false});
    }
    if(flash.alert){
        return ReactDOM.createPortal(
            <div onClick={clearAlert} className="fixed top-0 bottom-0 left-0 right-0 bg-overlay d-grid place-content-center z-index-100">
                <dialog onClick={(e)=>e.stopPropagation()} open className="bg-tile-blue-tr bg-filter-5 rounded-05 ptb-15 plr-3 w-500px d-flex flex-col center-y static fluid-effect">
                    <figure className={`${flash.type === "success" ? "fill-green" : "fill-red"} size-5 text-centered`}>
                        {flash.type === 'success' ? <FiCheckCircle/> : <BsEmojiFrown/>}
                        <h6 className={`${flash.type === "success" ? "text-primary" : "text-error"} uppercase`} style={{fontSize:"22px"}}>{flash.type === "success" ? "Success" : "Error"}!</h6>
                    </figure>
                    <p className="text-white fs-4 mtb-05">{flash.message}.</p>
                    <button onClick={flash.type === "success" ? clearAlert : clearAlert} className={`${flash.type === "success" ? "bg-green" : "bg-red"} fs-4 uppercase font-weight-500 ptb-05 plr-25 rounded-05 mt-1`}>{flash.type === "success" ? "continue" : "Try again"}</button>
                </dialog>
            </div>
            ,document.getElementById('flash'));
    }
}
export default Flash;