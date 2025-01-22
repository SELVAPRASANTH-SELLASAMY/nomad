import { useState } from "react";
import UserControls from "../userControls/UserControls";
function UserMenu(){
    const [controls,showControls] = useState(false);
    return(
        <div onClick={()=>showControls(!controls)} className='d-flex gap-05 center-y relative pointer'>
            <canvas id='profile-picture' className='w-2rem aspect-ratio-equal bg-light-blue rounded-100px'></canvas>
            <p id='user-name' className='fs-4'>Admin <span className='fs-5'>&#128899;</span></p>
            {controls && 
                <UserControls/>
            }
        </div>
    );
}
export default UserMenu;