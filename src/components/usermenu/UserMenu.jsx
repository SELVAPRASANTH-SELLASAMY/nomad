import { useState } from "react";
import UserControls from "../userControls/UserControls";
import { useUser } from "../../store/zustandStore";
function UserMenu(){
    const [controls,showControls] = useState(false);
    const user = useUser(state => state.user);

    return(
        <div className='d-flex gap-05 relative ml-auto'>
            <span className="h-2rem w-2rem border-grey-01 rounded-100px bg-tile-blue d-grid center-y justify-center hide-overflow">
                {(user && user.image) && <img className="w-7rem" src={`${import.meta.env.VITE_REACT_APP_API_URL}\\${user.image}`} alt="profile-picture" />}
            </span>
            <p onFocus={()=>showControls(true)} onBlur={() => showControls(false)} tabIndex="0" id='user-name' className='fs-4 pointer uppercase font-weight-500 d-flex center-y'>{user?.name || "Loading..."} <span className='fs-4 ml-015'>&#9660;</span></p>
            {controls && 
                <UserControls/>
            }
        </div>
    );
}
export default UserMenu;