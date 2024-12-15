function Blogtile({blog}){
    const gotoBlog = () => {
        window.location.href = `home/blog?id=${blog._id}`;
    }
    return(
        <div className='bg-tile-blue p-1 rounded-1 d-flex flex-col gap-025'>
            <img onClick={gotoBlog} className='w-100 aspect-ratio-15 rounded-top-1' src={blog.content} alt={`${blog.title} thumbnail`} />
            <h6 className='fs-4 font-weight-500'>{blog.title}</h6>
            <div className='fs-4 d-iflex justify-space-between'>
                <p className='text-gold'><span className='fs-5 mr-025'>&#9733;</span>4.5</p>
                <p className='text-secondary'><span className='fs-5 mr-025'>&#x1F441;</span>4500</p>
            </div>
            <hr className='border-grey-005 mb-05'></hr>
            <div id='author' className='d-flex center-y gap-05'>
                <canvas className='bg-light-blue w-2rem aspect-ratio-equal rounded-100px'></canvas>
                <p id='author-name' className='fs-4'>Tom Riddle</p>
            </div>
        </div>
    );
}
export default Blogtile;