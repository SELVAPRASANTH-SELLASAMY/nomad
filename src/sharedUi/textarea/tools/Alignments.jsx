import { LuAlignLeft, LuAlignCenter, LuAlignRight } from "react-icons/lu";
import { ToolItem, ToolOptionsLayout } from "../layout";
function Alignments(){
    const aligns = [
        {
            position:'left',
            icon:<LuAlignLeft/>
        },
        {
            position:'center',
            icon:<LuAlignCenter/>
        },
        {
            position:'right',
            icon:<LuAlignRight/>
        }
    ];
    return(
        <ToolOptionsLayout>
            {
                aligns.map((align,index)=>(
                    <ToolItem key={index} name={align.position}>
                        {align.icon}
                    </ToolItem>
                ))
            }
        </ToolOptionsLayout>
    );
}
export default Alignments;