import { useEffect, useState } from "react";

function useWindowWidth(){
    const [WindowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener('resize',handleResize);
    },[]);

    return WindowWidth;
}

export default useWindowWidth;