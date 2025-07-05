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
        published:false,
        category:''
    });

    const categoryOptions = ["programming","Frontend","Backend","Database","technology","general"];
    const [category,setCategory] = useState(categoryOptions[0]);

    const [queryParams] = useSearchParams();

    const edit = queryParams.get("edit");
    const { data, error, isPending } = useFetch(edit ? `blog/getcontent?id=${edit}` : null);

    useEffect(()=>{
        if(data?.data){
            setContent({...(data.data),copy:(data.data),id:edit});
        }
    },[data,edit]);

    useEffect(() => {
        setContent((prev) => ({
            ...prev,
            category: category
        }));
    },[category]);

    useEffect(() => {
        if(content.category){
            setCategory(content.category);
        }
    },[content.category]);

    return(
        edit && (isPending || error) 
        ? 
            <p className="fs-5 mt-5 font-weight-600 uppercase text-secondary">{isPending ? 'Loading...' : error}</p> 
        :
        <>
            <section className="bg-common-blue w-100 pb-15">
                <h2 className="fs-6 mt-5 mt-4_L_500 font-weight-600 uppercase">New post</h2>
                <div className="toolbar d-flex flex-col_L_550 gap-2 row-gap-1 w-100 mt-05">
                    <Select
                        name="Category"
                        options={categoryOptions}
                        value={category}
                        setValue={setCategory}
                    />
                    <ActionButton content={content} setContent={setContent}/>
                </div>
            </section>
            <Editor content={content} setContent={setContent}/>
        </>
    );
}
export default Newpost;