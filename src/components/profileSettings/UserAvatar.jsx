import { useEffect, useRef } from "react";
import useCanvas from "../../customhooks/useCanvas";

function UserAvatar({avatar,setInput}){
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);
    const drawImage = useCanvas();

    useEffect(() => {
        if(avatar) drawImage(canvasRef,avatar);
    },[avatar,drawImage]);

    const handleClick = () => {
        fileInputRef?.current?.click();
    }

    const handleImageChange = (e) => {
        const pic = e.target.files[0];
        drawImage(canvasRef,avatar);
        setInput((prevState) => ({...prevState,image:pic}));
    }

    const handleDelete = () => {
        if(avatar){
            setInput(prevState => ({...prevState,image:null}));
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    return(
        <div className="d-flex center-y gap-2 row-gap-15 wrap-flex">
            <input ref={fileInputRef} onChange={handleImageChange} type="file" accept="image/*" style={{display:"none"}}/>
            <canvas ref={canvasRef} className='h-7rem aspect-ratio-equal border-green-01 rounded-100px bg-tile-blue'></canvas>
            <button onClick={handleClick} className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Upload new picture</button>
            {
                avatar && 
                <button onClick={handleDelete} className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Delete</button>
            }
        </div>
    );
}

export default UserAvatar;