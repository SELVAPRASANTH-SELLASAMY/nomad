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
            quillInstance.current = new Quill(editorRef.current, QuillConfig);
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
                    <h2 onClick={()=>setEditTitle(true)} className="fs-7 font-weight-600 text-centered uppercase">{content.title || "Click here to edit the title..."}</h2>
            }
            <br />
            <div ref={editorRef}/>
        </section>
    );
}
export default Editor;