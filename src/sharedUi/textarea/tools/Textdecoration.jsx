import { ToolItem, ToolOptionsLayout } from "../layout";
import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from "react-icons/bs";
function Textdecoration(){
    const decors = [
        {
            name:"Bold",
            icon:<BsTypeBold/>
        },
        {
            name:"Underline",
            icon:<BsTypeUnderline/>
        },
        {
            name:"Italic",
            icon:<BsTypeItalic/>
        }
    ];
    return(
        <ToolOptionsLayout>
            {
                decors.map((decor,index)=>(
                    <ToolItem key={index} name={decor.name}>
                        {decor.icon}
                    </ToolItem>
                ))
            }
        </ToolOptionsLayout>
    );
}
export default Textdecoration;