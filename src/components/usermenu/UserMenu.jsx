import { useState } from "react";
import UserControls from "../userControls/UserControls";
import { useUser } from "../../store/userStore";
function UserMenu(){
    const [controls,showControls] = useState(false);
    const user = useUser(state => state.user);
    return(
        <div className='d-flex gap-05 center-y relative'>
            <canvas id='profile-picture' className='w-2rem aspect-ratio-equal bg-light-blue rounded-100px'></canvas>
            <p onFocus={()=>showControls(true)} onBlur={() => showControls(false)} tabIndex="0" id='user-name' className='fs-4 pointer'>{user?.name || "Loading..."} <span className='fs-5_5'>&#128899;</span></p>
            {controls && 
                <UserControls/>
            }
        </div>
    );
}
export default UserMenu;