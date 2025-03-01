import './header.css';
import { Outlet, useLocation } from 'react-router-dom';
import Searchinput from '../searchinput/Searchinput';
import UserMenu from '../usermenu/UserMenu';
function Header({setShowNavbar,setSearch}){
    const location = useLocation();
    const sideBarChilds = ["/","/editor"];
    const handleSidebar = () => {
        if(sideBarChilds.includes(location.pathname)){
            setShowNavbar((prevState) => !prevState);
        }
    }
    return(
        <>
            <header className={`w-100 plr-25 fixed left-0 top-0 d-flex center-y ${location.pathname !== '/login' && 'bg-tile-blue border-bottom-grey-01'}`}>
                <h1 onClick={handleSidebar} className={`text-primary fs-7 uppercase mr-2 ${sideBarChilds.includes(location.pathname) && 'pointer'}`}>nomad</h1>
                {location.pathname === '/' && 
                    <Searchinput setSearch={setSearch}/>
                }
                {location.pathname !== '/login' &&
                    <div className='fs-6 d-flex gap-2 center-y ml-auto'>
                        <UserMenu/>
                    </div>
                }
            </header>
            <Outlet/>
        </>
    );
}
export default Header;