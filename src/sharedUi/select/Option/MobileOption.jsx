import { useEffect, useRef } from "react";

function MobileOption({onClick,expand,children}){
    const MobileOptionRef = useRef(null);

    useEffect(() => {
        if(expand){
            MobileOptionRef?.current?.showModal();
        }
        else{
            MobileOptionRef?.current?.close();
        }
    },[expand]);

    return(
        <dialog onClick={onClick} style={{maxWidth:"300px"}} ref={MobileOptionRef} className="w-100 no-bg text-white no-border mlr-auto mtb-auto">
            {children}
        </dialog>
    );
}

export default MobileOption;