import React,{ useEffect, useRef, useState } from "react";
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
    const QuillRef = useRef();
    useEffect(()=>{
        const toolbar = QuillRef.current.getEditor().getModule('toolbar');
        const toggleFSbutton = toolbar.container.querySelector('.ql-toggleFullScreen');
        if(toggleFSbutton){
            toggleFSbutton.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path></svg>`
        }
    },[]);
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
            <ReactQuill ref={QuillRef} modules={modules} theme="snow" value={value} onChange={setValue} />
        </section>
    );
}
export default Editor;