import { useEffect, useRef, useState } from "react";
import UserControls from "../userControls/UserControls";
import { useUser } from "../../store/userStore";
function UserMenu(){
    const [controls,showControls] = useState(false);
    const user = useUser(state => state.user);

    const avatarRef = useRef(null);

    useEffect(() => {
        if(user?.image){
            handleCanvas(user.image);
        }
        else{
            const canvas = avatarRef.current;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    },[user?.image]);

    const handleCanvas = (img) => {
        const canvas = avatarRef.current;
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
        }
        if(img && typeof img !== "string"){
            const url = URL.createObjectURL(img);
            image.src = url;
        }
        else{
            if(img) image.src = img.startsWith('file') ? img : `${process.env.REACT_APP_API_URL}${img}`;
        }
    }

    return(
        <div className='d-flex gap-05 center-y relative'>
            <canvas ref={avatarRef} id='profile-picture' className='w-2rem aspect-ratio-equal border-grey-01 rounded-100px bg-lgreen'></canvas>
            <p onFocus={()=>showControls(true)} onBlur={() => showControls(false)} tabIndex="0" id='user-name' className='fs-4 pointer'>{user?.name || "Loading..."} <span className='fs-5_5'>&#128899;</span></p>
            {controls && 
                <UserControls/>
            }
        </div>
    );
}
export default UserMenu;