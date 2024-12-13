import { useEffect, useRef, useState } from "react";
import 'quill/dist/quill.snow.css';
import Quill from "quill";
import { QuillConfig } from './editorConfig';
import './editor.css';
import { debounce } from "lodash";
function Editor(){
    const [content,setContent] = useState({
        title:'',
        content:''
    });
    const [editTitle,setEditTitle] = useState(false);
    const editorRef = useRef(null);
    const quillInstance = useRef(null);
    useEffect(()=>{
        if(!quillInstance.current && editorRef.current){
            quillInstance.current = new Quill(editorRef.current, QuillConfig(quillInstance));

            const toolbar = quillInstance.current.getModule('toolbar').container;
            if(toolbar){
                toolbar.querySelector('.ql-fullscreen-mode').innerHTML = `<svg class='ql-stroke' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path></svg>`;
            }
            
            quillInstance.current.on('text-change',debounce(()=>{
                setContent({...content,content:quillInstance.current.root.innerHTML});
            },1000));
        }
    },[content]);
    useEffect(()=>{
        console.log(content);
    },[content]);
    return(
        <section className="nomad-editor mt-120">
            {
                editTitle ?
                    <input 
                        type="text"
                        id="blog-title"
                        name="blog-title"
                        placeholder="Enter the blog title..."
                        onChange={(e)=>setContent({...content,title:e.target.value})}
                        className="fs-4 w-100 ptb-1 plr-15 rounded-05 border-grey-01 trans-border-250 no-outline bg-tile-blue text-white mtb-1"
                        onBlur={()=>setEditTitle(false)}
                        autoFocus
                        value={content.title}
                    /> 
                    :
                    <h2 onClick={()=>setEditTitle(true)} className="fs-7 font-weight-600 text-centered uppercase pointer">{content.title || "Click here to edit the title..."}</h2>
            }
            <br />
            <div className="quill-element mb-25">
                <div ref={editorRef}/>
            </div>
        </section>
    );
}
export default Editor;