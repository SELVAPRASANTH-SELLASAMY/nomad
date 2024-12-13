import { useState } from 'react';
import { Select } from '../../sharedUi/select';
import ActionButton from './ActionButton';
import Editor from '../editor/Editor';
function Newpost(){
    const [content,setContent] = useState({
        title:'',
        content:'',
        published:false
    });
    return(
        <>
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 plr-25 z-index-90">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">New post</h2>
                <div className="toolbar d-flex gap-2 w-100 mt-05">
                    <Select
                        name="Category"
                        options={["All","programming","technology","general"]}
                    />
                    <ActionButton content={content} setContent={setContent}/>
                </div>
            </section>
            <Editor content={content} setContent={setContent}/>
        </>
    );
}
export default Newpost;