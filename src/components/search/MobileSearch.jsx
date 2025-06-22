import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import SearchInput from "./SearchInput";
function MobileSearch(){
    const [display,setDisplay] = useState(false);
    const MobileSearchRef = useRef(null);

    useEffect(() => {
        if(display){
            MobileSearchRef?.current?.showModal();
        }
        else{
            MobileSearchRef?.current?.close();
        }
    },[display]);

    return(
        <>
            <div onClick={() => setDisplay(true)} className="w-2rem h-2rem p-025 bg-common-blue rounded-100px fs-5 d-iflex center-y justify-center border-grey-01">
                <IoSearchSharp/>
            </div>
            <dialog onClick={() => setDisplay(false)} ref={MobileSearchRef} className="no-bg text-white no-border mt-2 mlr-auto">
                <SearchInput displayMobileSearch={setDisplay}/>
            </dialog>
        </>
    );
}

export default MobileSearch;