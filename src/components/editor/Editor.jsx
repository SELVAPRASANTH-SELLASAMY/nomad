import React,{ useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import TextComposer from "../textcomposer/TextComposer";
import './editor.css';
import { modules } from "./quillConfig";
function Editor(){
    const [value,setValue] = useState();
    const [blogTitle,setBlogTitle] = useState({
        title:'' || "Click here to edit change the title",
        error:'',
        edit:false
    });
    const handleInput = (e) => {
        setBlogTitle({...blogTitle,title:e.target.value});
    }
    return(
        <section className="mt-120 mb-5">
            {/* <TextComposer value={value}/> There is no need for this here it should appear as preview after saving the content */}
            {
                blogTitle.edit ? 
                    <input 
                        onChange={handleInput}
                        onBlur={()=>setBlogTitle({...blogTitle,edit:false})}
                        value={blogTitle.title} 
                        className={`fs-4 w-100 ptb-1 plr-15 rounded-05 border-grey-01 trans-border-250 no-outline bg-tile-blue text-white mb-1`}
                        type="text" 
                        id="title" 
                        name="blogTitle"
                        placeholder="Enter your heading here" 
                        autoComplete='off'
                    /> :
                    <h2 onClick={()=>setBlogTitle({...blogTitle,edit:true})} className="fs-7 text-centered uppercase mb-1 relative heading-text">
                        {blogTitle.title}
                        <span className="bottom-line"></span>
                    </h2>
            }
            <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
        </section>
    );
}
export default Editor;