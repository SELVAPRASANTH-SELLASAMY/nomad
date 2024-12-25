import { useState } from "react";
import { Option } from "../../sharedUi/select";
import { RiDraftLine, RiSave3Line, RiUploadCloud2Line, RiDeleteBin6Line } from "react-icons/ri";
import { usePost, useUpdate } from "../../customhooks/httpMethod";
function ActionButton({content,setContent}){
    const { post } = usePost('/add');
    const { update } = useUpdate(content.id ? `/update?id=${content.id}` : null);
    const saveBlog = () => {
        if("copy" in content){
            let updatedContent = {};
            Object.keys(content.copy).forEach((key) => {
                if(content[key] !== content.copy[key]){
                    updatedContent[key] = content[key];
                }
            })
            if((Object.keys(updatedContent).length) > 0){
                update(updatedContent);
            }
        }
        else{
            post(content);
        }
    }
    const saveAsDraft = () => {
        const stringContent = JSON.stringify(content);
        localStorage.setItem('blogDraft',stringContent);
    }
    const publishBlog = () => {
        setContent((prevState)=>({
            ...prevState,
            published:true
        }))
    }
    const discardBlog = () => {
        const draftBlog = localStorage.getItem('blogDraft');
        if(draftBlog){
            localStorage.removeItem('blogDraft');
        }
        setContent({
            title:'',
            content:'',
            published:false
        });
    }

    const actions = [
        {icon:<RiSave3Line/>,name:"Save"},
        {icon:<RiDraftLine/>,name:"Draft"},
        {icon:<RiUploadCloud2Line/>,name:"Publish"},
        {icon:<RiDeleteBin6Line/>,name:"Discard"}
    ];

    const functionality = {
        "Save":saveBlog,
        "Draft":saveAsDraft,
        "Publish":publishBlog,
        "Discard":discardBlog
    }

    const [value, setValue] = useState(actions[0]);
    const [expand,setExpand] = useState(false);

    return(
        <div className="w-10rem relative ml-auto">
            <button onClick={functionality[value.name]} type="button" className='fs-4 bg-green rounded-05 ptb-025 plr-1 text-black font-weight-600 d-flex center-y gap-05 w-fit justify-center pointer uppercase ml-auto text-no-wrap'>
                <span>{value.name}</span>
                <span tabIndex="0" onClick={(e)=>e.stopPropagation()} onFocus={()=>setExpand(true)} onBlur={()=>setExpand(false)}>| &#9660;</span>
            </button>
            {expand &&
                <Option actions={actions} setValue={setValue} value={value}/>
            }
        </div>
    );
}
export default ActionButton;