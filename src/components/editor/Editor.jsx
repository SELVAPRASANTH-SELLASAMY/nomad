import React,{ useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextComposer from "../textcomposer/TextComposer";
import './editor.css';
import { modules } from "./quillConfig";
function Editor(){
    const [value,setValue] = useState();
    return(
        <section className="mt-120 mb-5">
            <TextComposer value={value}/> {/* There is no need for this here it should appear as preview after saving the content */}
            <br/>
            <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
        </section>
    );
}
export default Editor;