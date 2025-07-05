import { useEffect, useRef, useState } from "react";
import UserControls from "../userControls/UserControls";
import { useUser } from "../../store/zustandStore";
import useCanvas from "../../customhooks/useCanvas";
function UserMenu(){
    const [controls,showControls] = useState(false);
    const user = useUser(state => state.user);

    const avatarRef = useRef(null);

    const drawImage = useCanvas();

    useEffect(() => {
        drawImage(avatarRef,user?.image);
    },[user?.image,drawImage]);

    return(
        <div className='d-flex gap-05 relative ml-auto'>
            <canvas ref={avatarRef} id='profile-picture' className='w-2rem aspect-ratio-equal border-grey-01 rounded-100px bg-common-blue'></canvas>
            <p onFocus={()=>showControls(true)} onBlur={() => showControls(false)} tabIndex="0" id='user-name' className='fs-4 pointer uppercase font-weight-500 d-flex center-y'>{user?.name || "Loading..."} <span className='fs-4 ml-015'>&#9660;</span></p>
            {controls && 
                <UserControls/>
            }
        </div>
    );
}
export default UserMenu;