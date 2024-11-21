import { Select, Option } from "../select";
function Toolbar(){
    return(
        <div className="mt-05 d-flex gap-2 text-no-wrap">
            <Select name="Sort by">
                <Option value="publish date"/>
                <Option value="popular"/>
                <Option value="name"/>
                <Option value="view count"/>
            </Select>

            <Select name="Category">
                <Option value="All"/>
                <Option value="programming"/>
                <Option value="technology"/>
                <Option value="general"/>
            </Select>
        </div>
    );
}
export default Toolbar;