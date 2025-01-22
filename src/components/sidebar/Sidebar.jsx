import { IoIosHome, IoMdAddCircleOutline, IoIosAnalytics } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { Outlet, useLocation, Link } from "react-router-dom";
function Sidebar({showNavbar}){
    const location = useLocation();
    const navigations = [
        {
            path:'/home',
            name:'Home',
            icon:<IoIosHome/>
        },
        {
            path:'/home/editor',
            name:'New Post',
            icon:<IoMdAddCircleOutline/>
        },
        {
            path:'/category',
            name:'Category',
            icon:<BiCategory/>
        },
        {
            path:'/analytics',
            name:'Analytics',
            icon:<IoIosAnalytics/>
        }
    ];
    return(
        <>
            {showNavbar && 
                <nav className="w-13rem h-100 bg-tile-blue plr-1 fixed left-0 top-0 z-index-91 pt-5">
                    {
                        navigations.map((nav,index)=>(
                            <Link to={nav.path} key={index} className={`fs-6 d-flex center-y gap-05 rounded-05 ptb-05 plr-1 mtb-1 ${location.pathname === nav.path ? 'bg-green text-black' : 'text-white'}`}>
                                {nav.icon}
                                <span className="fs-4">{nav.name}</span>
                            </Link>
                        ))
                    }
                </nav>
            }
            <Outlet/>
        </>
    );
}
export default Sidebar;