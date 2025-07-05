import "./loading.css";
import ReactDOM from 'react-dom';
import { useLoading } from "../../store/zustandStore";
function Loading(){
    const loading = useLoading(state => state.loading);
    if(loading){
        return ReactDOM.createPortal(
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-overlay d-flex center-y justify-center z-index-110">
                <span className="container">
                    {
                        Array.from({length:4},(_,index) => (
                            <svg style={{"--i":index}} className="rect" key={index} width="15" viewBox="0 0 100 100">
                                <rect fill='#72E2AE' width="100" height="100" rx="10" ry="10"></rect>
                            </svg>
                        ))
                    }
                </span>
            </div>
            ,document.getElementById('flash')
        );
    }
}

export default Loading;