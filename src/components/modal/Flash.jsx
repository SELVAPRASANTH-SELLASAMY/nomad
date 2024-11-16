import './flash.css';
import { FiCheckCircle } from "react-icons/fi";
function Flash(){
    return(
        <dialog open className="bg-tile-blue rounded-05 ptb-15 plr-3 w-500px d-flex flex-col center-y">
            <figure className="fill-green size-5 text-centered">
                <FiCheckCircle/>
                <h6 className="text-primary uppercase" style={{fontSize:"22px"}}>Success!</h6>
            </figure>
            <p className="text-white fs-4 mtb-05">Password changed successfully.</p>
            <button className="fs-4 uppercase font-weight-500 ptb-05 plr-25 rounded-05 bg-green mt-1">continue</button>
        </dialog>
    );
}
export default Flash;