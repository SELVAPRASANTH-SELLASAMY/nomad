const useCanvas = () => {
    const drawImage = (Ref,img) => {
        if(img){
            const canvas = Ref.current;
            const ctx = canvas.getContext("2d");
            const image = new Image();
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, image.width, image.height);
            }
            if(typeof img !== "string"){
                const url = URL.createObjectURL(img);
                image.src = url;
            }
            else{
                image.src = img.startsWith('blob') ? img : `${import.meta.env.VITE_REACT_APP_API_URL}\\${img}`;
            }
        }
        else{
            const canvas = Ref.current;
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };
    return drawImage;
}

export default useCanvas;