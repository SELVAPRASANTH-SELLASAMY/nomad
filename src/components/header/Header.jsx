import './header.css';
import { Outlet } from 'react-router-dom';
function Header(){
    return(
        <>
            <header className='w-100 ptb-025 plr-25 fixed left-0 top-0'>
                <h1 className='text-primary fs-7 uppercase'>nomad</h1>
            </header>
            <Outlet/>
        </>
    );
}
export default Header;