import './header.css';
import { Outlet, useLocation } from 'react-router-dom';
import Search from '../search/Search';
import UserMenu from '../usermenu/UserMenu';
import { useNavControls } from '../../store/zustandStore';
import useWindowWidth from '../../customhooks/useWindowWidth';
function Header(){
    const handleNavDisplay = useNavControls(state => state.handleDisplay);
    const location = useLocation();
    const windowWidth = useWindowWidth();
    const sideBarChilds = ["/","/editor"];

    if(windowWidth <= 768) sideBarChilds.push("/settings");

    const handleSidebar = () => {
        if(sideBarChilds.includes(location.pathname)){
            handleNavDisplay();
        }
    }
    
    return(
        <>
            <header className="w-100 plr-25 plr-15_L_650 plr-1_L_425 fixed left-0 top-0 d-flex center-y bg-tile-blue border-bottom-grey-01">
                <h1 onClick={handleSidebar} className={`text-primary fs-7 uppercase mr-2 ${sideBarChilds.includes(location.pathname) && 'pointer'}`}>nomad</h1>
                <div className='d-flex center-y justify-space-between w-100 w-auto_L_768 gap-05_L_768 ml-auto'>
                    {location.pathname === '/' && 
                        <Search/>
                    }
                    <UserMenu/>
                </div>
            </header>
            <Outlet/>
        </>
    );
}
export default Header;