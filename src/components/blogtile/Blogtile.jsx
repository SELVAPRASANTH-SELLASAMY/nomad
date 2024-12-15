import Lazyimage from '../lazyimage/Lazyimage';
function Blogtile({blog}){
    const gotoBlog = () => {
        window.location.href = `blog?id=${blog._id}`;
    }
    return(
        <div onClick={gotoBlog} className='bg-tile-blue p-1 rounded-1 d-flex flex-col gap-05 pointer zoom-onHover-101'>
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
                <p className='text-secondary'>Technology</p>
                <p className='text-secondary'>15-12-2024</p>
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