import { useContext, useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { useDelete } from '../../customhooks/httpMethod';
import { BlogContext } from '../blogs/Blogs';
const BlogOptions = ({id}) => {
    const [showOptions,setShowOptions] = useState(false);
    const setData = useContext(BlogContext);
    const { erase } = useDelete(`/delete?id=${id}`);
    const handleMenuClick = (e) => {
        e.stopPropagation();
        setShowOptions(!showOptions);
    }
    const handleEdit = (e) => {
        e.stopPropagation();
        window.location.href = `home/editor?edit=${id}`;
    }
    const handleDelete = (e) => {
        e.stopPropagation();
        erase(() => {
            setData((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        });
    }
    const options = [
        {name:'Edit',icon:<MdEdit/>,clickHandler:handleEdit},
        {name:'Delete',icon:<MdDelete/>,clickHandler:handleDelete}
    ];
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
export default BlogOptions;