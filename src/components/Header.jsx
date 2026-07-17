import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useRef } from "react";
function Header(){
    const path = useLocation().pathname;
    const navRef = useRef(null);

    const handleClick = () => {
        if(navRef?.current) navRef.current.openNavbar();
    }
    
    return(
        <header className={`pd-lg sticky top-0 bg-dark-blue border-btm-sm-gray d-flex gap-md items-center z-index-top ${path !== '/' ? 'py-md' : null}`}>
            {
                path !== '/' ?
                    <span onClick={handleClick} className="fs-2lg d-inline-flex pd-sm bg-tile-blue rounded-md border-sm-gray">
                        <MdMenu/>
                    </span> :
                null
            }
            <h1 className="fs-lg uppercase bold-md primary dot">Nomad</h1>

            {
                path !== '/' ? <Navbar ref={navRef}/> : null
            }
        </header>
    );
}

export default Header;