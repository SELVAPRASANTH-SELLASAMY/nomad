import { IoIosHome, IoIosAddCircleOutline, IoIosAnalytics } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { Outlet } from "react-router-dom";
function Sidebar(){
    return(
        <>
            <nav className="w-13rem h-100 bg-tile-blue plr-1 fixed left-0 top-0">
                <div className="mt-5">
                    <a href="/home" className="text-black fs-6 d-flex center-y gap-05 rounded-05 ptb-05 plr-1 mtb-1 bg-green">
                        <IoIosHome/>
                        <span className="fs-4">Home</span>
                    </a>
                    <a href="/new" className="text-white fs-6 d-flex center-y gap-05 rounded-05 ptb-05 plr-1 mtb-1">
                        <IoIosAddCircleOutline/>
                        <span className="fs-4">New post</span>
                    </a>
                    <a href="/category" className="text-white fs-6 d-flex center-y gap-05 rounded-05 ptb-05 plr-1 mtb-1">
                        <BiCategory/>
                        <span className="fs-4">Category</span>
                    </a>
                    <a href="/analytics" className="text-white fs-6 d-flex center-y gap-05 rounded-05 ptb-05 plr-1 mtb-1">
                        <IoIosAnalytics/>
                        <span className="fs-4">Analytics</span>
                    </a>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}
export default Sidebar;