import { useEffect, useRef } from "react";
import 'quill/dist/quill.snow.css';
import Quill from "quill";
import { QuillConfig } from './editorConfig';
import './editor.css';
function Editor(){
    const editorRef = useRef(null);
    const quillInstance = useRef(null);
    useEffect(()=>{
        if(!quillInstance.current && editorRef.current){
            quillInstance.current = new Quill(editorRef.current, QuillConfig)
        }
    },[]);
    return(
        <section className="nomad-editor mt-120">
            <div ref={editorRef}/>
        </section>
    );
}
export default Editor;