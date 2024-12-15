import { useState } from 'react';
import './header.css';
import { Outlet, useLocation } from 'react-router-dom';
import Searchinput from '../searchinput/Searchinput';
import { BiBell } from "react-icons/bi";
import { MdOutlineSettings, MdOutlineLogout } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
function Header({setShowNavbar}){
    const location = useLocation();
    const [controls,showControls] = useState(false);
    return(
        <>
            <header className={`w-100 ptb-025 plr-25 fixed left-0 top-0 d-flex center-y ${location.pathname !== '/' && 'bg-tile-blue border-bottom-grey-01'}`}>
                <h1 onClick={()=>setShowNavbar((prevState)=>!prevState)} className='text-primary fs-7 uppercase mr-2 pointer'>nomad</h1>
                {location.pathname !== '/' &&
                    <>
                        {location.pathname === '/home' && <Searchinput/>}
                        <div className='fs-6 d-flex gap-2 center-y ml-auto'>
                            <TbNotes/>
                            <BiBell/>
                            <div onClick={()=>showControls(!controls)} className='d-flex gap-05 center-y relative pointer'>
                                <canvas id='profile-picture' className='w-2rem aspect-ratio-equal bg-light-blue rounded-100px'></canvas>
                                <p id='user-name' className='fs-4'>Admin <span className='fs-5'>&#128899;</span></p>
                                {controls && 
                                    <ul className='w-10rem border-grey-01 rounded-05 hide-overflow bg-tile-blue absolute right-0 top-25'>
                                        <li className='fs-5_5 d-flex center-y gap-05 ptb-05 pl-1 hover-blue'>
                                            <MdOutlineSettings/>
                                            <span className='fs-4 text-no-wrap'>Settings</span>
                                        </li>
                                        <li className='fs-5_5 d-flex center-y gap-05 ptb-05 pl-1 hover-blue'>
                                            <MdOutlineLogout/>
                                            <span className='fs-4 text-no-wrap'>Sign out</span>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </>
                }
            </header>
            <Outlet/>
        </>
    );
}
export default Header;