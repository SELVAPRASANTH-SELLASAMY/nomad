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
    const Flashalert = useContext(AppContext);
    useImperativeHandle(Flashalert,() => ({
        confirm: (title,message) => setFlash((prevFlash)=>({
            ...prevFlash,
            title:title,
            message:message,
            open:true
        }))
    }),[]);
    if(flash.open){
        return ReactDOM.createPortal(
            <div className="backdrop fixed top-0 left-0 w-100 h-100 bg-overlay z-index-110 d-grid place-content-center">
                <dialog style={{boxShadow:'none',border:'.15rem groove var(--lightgrey)'}} open className="relative p-2 rounded-05 line-height-25rem w-min-500px bg-tile-blue-tr blur-10 text-white">
                    <span role="button" className="pointer fs-5 absolute right-05 top-05 hover-red svg-stroke-width-1">
                        <RxCross2/>
                    </span>
                    <h3 className="fs-6 font-weight-600">{flash.title}?</h3>
                    <p className="fs-4 text-secondary">{flash.message}</p>
                    <div className="d-flex justify-space-between mt-05">
                        <button type="button" className="fs-4 font-weight-600 uppercase ptb-05 text-centered w-13rem rounded-100px bg-green">Proceed</button>
                        <button type="button" className="fs-4 font-weight-600 uppercase ptb-05 text-centered w-13rem rounded-100px">Cancel</button>
                    </div>
                </dialog>
            </div>,
            document.getElementById('flash')
        );
    }
}
export default Confirm;