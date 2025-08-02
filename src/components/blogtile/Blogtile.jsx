import { useEffect, useRef } from 'react';
import { useUser } from '../../store/zustandStore';
import Lazyimage from '../lazyimage/Lazyimage';
import BlogOptions from './Manageblog';
import { useNavigate } from 'react-router-dom';
import useCanvas from '../../customhooks/useCanvas';
function Blogtile({blog}){
    const authorName = useUser(state => state.user?.name);
    const authorAvatar = useUser(state => state.user?.image);
    const drawImage = useCanvas();
    const avatarRef = useRef(null);
    const navigate = useNavigate();
    const gotoBlog = () => {
        navigate(`/blog?id=${blog._id}`);
    }

    const setDate = () => {
        const date = new Date(blog.createdAt);
        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth() + 1).padStart(2,'0');
        const year = String(date.getFullYear()).padStart(2,'0');
        return `${day}-${month}-${year}`;
    }

    useEffect(() => {
        drawImage(avatarRef,authorAvatar);
    },[authorAvatar,drawImage]);
    
    return(
        <div onClick={gotoBlog} className='bg-tile-blue p-1 rounded-1 d-flex flex-col gap-05 relative border-grey-005'>
            <BlogOptions id={blog._id}/>

            <Lazyimage 
                componentClass={'w-100 aspect-ratio-21 rounded-top-1'} 
                placeholder={blog.lazyImage} 
                source={blog.content}
                altText={`${blog.title} thumbnail`}
            />

            <h6 title={blog.title} className='fs-4 font-weight-500 webkit-vbox line-clamp-2 hide-overflow ellipsis'>{blog.title}</h6>
            {/* <div className='fs-3 d-iflex justify-space-between'>
                <p className='text-gold'><span className='mr-025'>&#9733;</span>4.5</p>
                <p className='text-secondary'><span className='mr-025'>&#x1F441;</span>4500</p>
            </div> */}
            <div className='fs-3 d-iflex justify-space-between'>
                <p className='text-secondary'>{blog.category}</p>
                <p className='text-secondary'>{setDate()}</p>
            </div>
            <hr className='border-grey-005 mtb-025'></hr>
            <div id='author' className='d-flex center-y gap-05'>
                <canvas ref={avatarRef} className='bg-light-blue w-015rem aspect-ratio-equal rounded-100px'></canvas>
                <p id='author-name' className='fs-4 uppercase'>{authorName || "Unknown"}</p>
            </div>
        </div>
    );
}
export default Blogtile;