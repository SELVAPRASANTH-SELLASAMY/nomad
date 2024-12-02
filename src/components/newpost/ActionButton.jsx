import { RiDraftLine, RiSave3Line, RiUploadCloud2Line, RiDeleteBin6Line } from "react-icons/ri";
function ActionButton(){
    const actions = [
        {icon:<RiSave3Line/>,name:"Save"},
        {icon:<RiDraftLine/>,name:"Save as draft"},
        {icon:<RiUploadCloud2Line/>,name:"Publish"},
        {icon:<RiDeleteBin6Line/>,name:"Discard"}
    ];
    return(
        <>
            <div role="button" tabIndex="0" className="d-flex bg-green no-border fs-4 font-weight-600 plr-05 ptb-025 rounded-05 text-black uppercase gap-05 justify-center">
                <p>Value</p>
                <span className="pointer">| &#9660;</span>
            </div>
            <ul className="list-style-none hide-overflow rounded-05 mt-025 border-grey-01 fs-4">
                {
                    actions.map((action,index)=>(
                        <li key={index} className="bg-tile-blue ptb-025 plr-1 hover-blue pointer d-flex gap-05">
                            <span className="fs-4 mt-025">
                                {action.icon}
                            </span>
                            <button className="button-appearance-none" type="button" id={action.name}>{action.name}</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
export default ActionButton;