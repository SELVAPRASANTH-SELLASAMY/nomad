import { RiImageAddFill, RiLinkM } from "react-icons/ri";
import { ToolOptionsLayout, ToolItem } from "../layout";
function Attachment(){
    const attachOptions = [
        {
            name:"image",
            icon:<RiImageAddFill/>
        },
        {
            name:"link",
            icon:<RiLinkM/>
        }
    ];
    return(
        <ToolOptionsLayout>
            {
                attachOptions.map((option,index)=>(
                    <ToolItem key={index} name={option.name}>
                        {option.icon}
                    </ToolItem>
                ))
            }
        </ToolOptionsLayout>
    );
}
export default Attachment;