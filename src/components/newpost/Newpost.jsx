import { useEffect, useState } from 'react';
import { Select } from '../../sharedUi/select';
import ActionButton from './ActionButton';
import Editor from '../editor/Editor';
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../customhooks/httpMethod";
function Newpost(){
    const [content,setContent] = useState({
        title:'',
        content:'',
        published:false
    });
    const categoryOptions = ["programming","Frontend","Backend","Database","technology","general"];
    const [category,setCategory] = useState(categoryOptions[0]);

    const [queryParams] = useSearchParams();

    const edit = queryParams.get("edit");
    const data = useFetch(edit ? `http://localhost:3001/nomad/getcontent?id=${edit}` : null);
    useEffect(()=>{
        if(data){
            setContent(data);
        }
    },[data]);

    return(
        <>
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 plr-25 z-index-90">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">New post</h2>
                <div className="toolbar d-flex gap-2 w-100 mt-05">
                    <Select
                        name="Category"
                        options={categoryOptions}
                        value={category}
                        setValue={setCategory}
                    />
                    <ActionButton content={{...content,category}} setContent={setContent}/>
                </div>
            </section>
            <Editor content={content} setContent={setContent}/>
        </>
    );
}
export default Newpost;