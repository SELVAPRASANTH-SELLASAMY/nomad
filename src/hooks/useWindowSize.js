import { useEffect, useState } from "react";

function useWindowSize(){
    const [windowSize,setWindowSize] = useState(0);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize(window.innerWidth);

        window.addEventListener('resize',handleWindowResize);

        return () => window.removeEventListener('resize',handleWindowResize);
    },[]);

    return windowSize;
}

export default useWindowSize;