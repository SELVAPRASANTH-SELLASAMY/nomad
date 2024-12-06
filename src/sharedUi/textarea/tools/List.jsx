import { PiListNumbersBold, PiListBulletsBold } from "react-icons/pi";
import { ToolItem, ToolOptionsLayout } from "../layout";
function List(){
    const Lists = [
        {
            listName:"numbered-list",
            icon:<PiListNumbersBold/>
        },
        {
            listName:"bullet-list",
            icon:<PiListBulletsBold/>
        }
    ];
    return(
        <ToolOptionsLayout>
            {
                Lists.map((list,index)=>(
                    <ToolItem key={index} name={list.listName}>
                        {list.icon}
                    </ToolItem>
                ))
            }
        </ToolOptionsLayout>
    );
}
export default List;