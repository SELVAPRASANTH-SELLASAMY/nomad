import { useState } from "react";
function BlogTitle({content,setContent}){
    const [editTitle,setEditTitle] = useState(false);
    const handleTitleChange = (e) => {
        setContent((prevContent)=>({
            ...prevContent,
            title:e.target.value
        }))
    }
    return(
        <>
            {
                editTitle ?
                    <input 
                        type="text"
                        id="blog-title"
                        name="blog-title"
                        placeholder="Enter the blog title..."
                        onChange={handleTitleChange}
                        className="fs-4 w-100 ptb-1 plr-15 rounded-05 border-grey-01 trans-border-250 no-outline bg-tile-blue text-white mtb-1"
                        onBlur={()=>setEditTitle(false)}
                        autoFocus
                        value={content.title}
                    /> 
                    :
                    <h2 onClick={()=>setEditTitle(true)} className="fs-7 font-weight-600 text-centered uppercase pointer">{content.title || "Click here to edit the title..."}</h2>
            }
        </>
    );
}
export default BlogTitle;