import { Select, Option } from "..//select";
import SelectCategory from "../../sharedUi/SelectCategory";
function Toolbar(){
    return(
        <div className="mt-05 d-flex gap-2 text-no-wrap">
            <Select name="Sort by">
                <Option value="publish date"/>
                <Option value="popular"/>
                <Option value="name"/>
                <Option value="view count"/>
            </Select>
            <SelectCategory/>
        </div>
    );
}
export default Toolbar;