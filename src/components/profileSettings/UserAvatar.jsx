import { useEffect, useRef, useState } from "react";

function UserAvatar({avatar,setInput}){
    const [pic,setPic] = useState(null);

    const fileInputRef = useRef(null);

    const imageURLRef = useRef(null);

    useEffect(() => {
        if(avatar && typeof avatar !== "string"){
            const url = URL.createObjectURL(avatar);
            setPic(url);
            imageURLRef.current = url;
        }
        else if(typeof avatar === "string"){
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}\\${avatar}`;
            setPic(url);
        }
        else{
            setPic(avatar);
        }
        return () => {
            if(imageURLRef.current){
                URL.revokeObjectURL(imageURLRef.current);
                imageURLRef.current = null;
            }
        }
    },[avatar]);

    const handleClick = () => {
        fileInputRef?.current?.click();
    }

    const handleImageChange = (e) => {
        const pic = e.target.files[0];
        setInput((prevState) => ({...prevState,image:pic}));
    }

    const handleDelete = () => {
        if(avatar) setInput(prevState => ({...prevState,image:null}));
    }

    return(
        <div className="d-flex center-y gap-2 row-gap-15 wrap-flex">
            <input ref={fileInputRef} onChange={handleImageChange} type="file" accept="image/*" style={{display:"none"}}/>
            <span className="h-7rem w-7rem border-green-01 rounded-100px bg-tile-blue d-grid center-y justify-center hide-overflow">
                {pic && <img className="w-7rem" src={pic} alt="profile-picture" />}
            </span>
            <button onClick={handleClick} className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Upload new picture</button>
            {
                avatar && 
                <button onClick={handleDelete} className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Delete</button>
            }
        </div>
    );
}

export default UserAvatar;