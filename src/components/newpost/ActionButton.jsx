import { useState } from "react";
import { Option } from "../../sharedUi/select";
import { RiDraftLine, RiSave3Line, RiUploadCloud2Line, RiDeleteBin6Line } from "react-icons/ri";
function ActionButton(){
    const actions = [
        {icon:<RiSave3Line/>,name:"Save"},
        {icon:<RiDraftLine/>,name:"Save as draft"},
        {icon:<RiUploadCloud2Line/>,name:"Publish"},
        {icon:<RiDeleteBin6Line/>,name:"Discard"}
    ];

    const [value, setValue] = useState(actions[0].name);
    const [expand,setExpand] = useState(false);

    return(
        <div className="w-15rem relative ml-auto">
            <button type="button" className='fs-4 bg-green rounded-05 ptb-025 plr-1 text-black font-weight-600 d-flex center-y gap-05 w-fit justify-center pointer uppercase ml-auto text-no-wrap'>
                <span>{value}</span>
                <span tabIndex="0" onFocus={()=>setExpand(true)} onBlur={()=>setExpand(false)}>| &#9660;</span>
            </button>
            {expand &&
                <Option actions={actions} setValue={setValue} value={value}/>
            }
        </div>
    );
}
export default ActionButton;