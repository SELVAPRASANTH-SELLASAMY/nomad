import { useImperativeHandle, useState } from "react";
import { MdClose, MdOutlineHome, MdOutlineCategory, MdBookmarkBorder } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const navigations = [
    {
        icon: MdOutlineHome,
        name: "blogs",
        path: "/blogs"
    },
    {
        icon: MdOutlineCategory,
        name: "categories",
        path: "/categories"
    },
    {
        icon: MdBookmarkBorder,
        name: "bookmarks",
        path: "/bookmarks"
    }
]

function Navbar({ref}){
    const [showNavbar,setNavbarVisible] = useState(false);

    const location = useLocation();

    useImperativeHandle(ref,() => ({
        openNavbar: () => setNavbarVisible(true)
    }),[])

    const closeNavbar = () => setNavbarVisible(false);

    if(!showNavbar) return null;

    return(
        <nav onClick={closeNavbar} style={{maxWidth: '300px'}} className="fixed left-0 top-0 w-70 h-full bg-tile-blue z-index-top px-lg py-md rounded-xl-right overlay">
            <div className="mb-lg d-flex items-center gap-md">
                <span className="fs-2lg d-inline-flex pd-sm bg-tile-blue rounded-md border-sm-gray">
                    <MdClose/>
                </span>
                <h1 className="fs-lg uppercase bold-md primary dot">Nomad</h1>
            </div>
            {
                navigations.map((navigation,index) => (
                    <NavLink 
                        key={`nav_${index}`}
                        to={navigation.path}
                        className={`w-full d-flex items-center gap-md fs-sm no-decoration px-md py-2md rounded-md my-sm ${location.pathname === navigation.path ? 'bg-mint border-left-md-green' : ''}`}
                    >
                        <span className={`fs-2lg d-flex ${location.pathname === navigation.path ? 'primary' : 'secondary'}`}>
                            <navigation.icon/>
                        </span>
                        <span className={`capitalize ${location.pathname === navigation.path ? 'text-white' : 'secondary'}`}>
                            {navigation.name}
                        </span>
                    </NavLink>
                ))
            }
        </nav>
    )
}

export default Navbar;