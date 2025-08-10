import { useEffect, useRef } from 'react';
function Lazyimage({componentClass,placeholder,source,onClick,altText}){
    const image = useRef();
    useEffect(()=>{
        const img = image.current;
        const setsrc = () => {
            if(img){
                img.src = source;
                img.removeEventListener('load',setsrc);
            }
        }
        img.complete ? setsrc() : img.addEventListener('load',setsrc);
        return ()=> img.removeEventListener('load',setsrc);
    },[source]);

    return(
        <div style={{alignItems:"flex-start"}} className={componentClass}>
            <img loading='lazy' className='w-100' onClick={onClick && onClick} ref={image} src={placeholder} alt={altText} />
        </div>
    );
}
export default Lazyimage;