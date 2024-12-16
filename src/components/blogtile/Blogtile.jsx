import { useState } from 'react';
import Lazyimage from '../lazyimage/Lazyimage';
import { MdEdit, MdDelete } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
const Manageblog = () => {
    const [showOptions,setShowOptions] = useState(false);
    const options = [
        {name:'Edit',icon:<MdEdit/>,clickHandler:(e) => {e.stopPropagation()}},
        {name:'Delete',icon:<MdDelete/>,clickHandler:(e) => {e.stopPropagation()}}
    ];
    const handleMenuClick = (e) => {
        e.stopPropagation();
        setShowOptions(!showOptions);
    }
    return(
        <div className='absolute top-8p right-8p d-flex flex-row-rev gap-05'>
            <span role='button' tabIndex="0" onClick={handleMenuClick} title='More options' className={`pointer w-015rem aspect-ratio-equal bg-overlay rounded-100px d-flex center-y justify-center click-scale-down ${showOptions && 'rotate-90deg'}`}>
                <PiDotsThreeOutlineVerticalFill/>
            </span>
            {
                (showOptions && options) && options.map((option,index)=>(
                    <span style={{animationDelay:`calc(${index} * 50ms)`}} role='button' tabIndex="0" key={index} onClick={option.clickHandler} title={option.name} className='pointer w-015rem aspect-ratio-equal bg-overlay rounded-100px d-flex center-y justify-center click-scale-down button-opa-effect'>
                        {option.icon}
                    </span>
                ))
            }
        </div>
    );
}
function Blogtile({blog}){
    const gotoBlog = () => {
        window.location.href = `blog?id=${blog._id}`;
    }
    const setDate = () => {
        const date = new Date(blog.createdAt);
        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth() + 1).padStart(2,'0');
        const year = String(date.getFullYear()).padStart(2,'0');
        return `${day}-${month}-${year}`;
    }
    return(
        <div onClick={gotoBlog} className='bg-tile-blue p-1 rounded-1 d-flex flex-col gap-05 relative'>
            <Manageblog/>
            <Lazyimage 
                componentClass={'w-100 aspect-ratio-21 rounded-top-1'} 
                placeholder={blog.lazyImage} 
                source={blog.content}
                altText={`${blog.title} thumbnail`}
            />
            <h6 title={blog.title} className='fs-4 font-weight-500 webkit-vbox line-clamp-2 hide-overflow ellipsis'>{blog.title}</h6>
            <div className='fs-3 d-iflex justify-space-between'>
                <p className='text-gold'><span className='mr-025'>&#9733;</span>4.5</p>
                <p className='text-secondary'><span className='mr-025'>&#x1F441;</span>4500</p>
            </div>
            <div className='fs-3 d-iflex justify-space-between'>
                <p className='text-secondary'>{blog.category}</p>
                <p className='text-secondary'>{setDate()}</p>
            </div>
            <hr className='border-grey-005 mtb-025'></hr>
            <div id='author' className='d-flex center-y gap-05'>
                <canvas className='bg-light-blue w-015rem aspect-ratio-equal rounded-100px'></canvas>
                <p id='author-name' className='fs-4'>Tom Riddle</p>
            </div>
        </div>
    );
}
export default Blogtile;