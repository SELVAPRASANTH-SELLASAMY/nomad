import { useEffect, useRef } from "react";

function UserAvatar({avatar,setInput}){
    const fileInputRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if(avatar) handleCanvas(avatar);
    },[avatar]);

    const handleClick = () => {
        fileInputRef?.current?.click();
    }

    const handleImageChange = (e) => {
        const pic = e.target.files[0];
        handleCanvas(pic);
        setInput((prevState) => ({...prevState,image:pic}));
    }

    const handleCanvas = (img) => {
        const canvas = canvasRef.current;
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

    const handleDelete = () => {
        if(avatar){
            setInput(prevState => ({...prevState,image:null}));
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    return(
        <div className="d-flex center-y gap-2">
            <input ref={fileInputRef} onChange={handleImageChange} type="file" accept="image/*" style={{display:"none"}}/>
            <canvas ref={canvasRef} className='h-7rem aspect-ratio-equal border-green-01 rounded-100px bg-lgreen'></canvas>
            <button onClick={handleClick} className="bg-green fs-4 ptb-025 plr-15 rounded-05 font-weight-500 uppercase">Upload new picture</button>
            {
                avatar && 
                <button onClick={handleDelete} className="bg-lgreen fs-4 ptb-025 plr-15 text-white rounded-05 font-weight-500 uppercase outline-green-01">Delete</button>
            }
        </div>
    );
}

export default UserAvatar;