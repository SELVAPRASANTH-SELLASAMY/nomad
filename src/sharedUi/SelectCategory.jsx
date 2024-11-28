import { Select, Option } from "../components/select";
function SelectCategory(){
    return(
        <Select name="Category">
            <Option value="All"/>
            <Option value="programming"/>
            <Option value="technology"/>
            <Option value="general"/>
        </Select>
    );
}
export default SelectCategory;