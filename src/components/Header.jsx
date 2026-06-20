import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";
function Header(){
    const path = useLocation().pathname;
    
    return(
        <header className={`pd-lg sticky top-0 bg-dark-blue border-btm-sm-gray d-flex gap-md items-center ${path !== '/' ? 'py-md' : null}`}>
            {
                path !== '/' ?
                    <span className="fs-2lg d-inline-flex pd-sm bg-tile-blue rounded-md border-sm-gray">
                        <MdMenu/>
                    </span> :
                null
            }
            <h1 className="fs-lg uppercase bold-md primary dot">Nomad</h1>
        </header>
    );
}

export default Header;