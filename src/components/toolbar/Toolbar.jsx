import Select from "./Select";
import Option from "./Option";
function Toolbar(){
    return(
        <section className="w-fit d-flex gap-2 mtb-05">
            <Select name="Sort by">
                <Option value="publish date"/>
                <Option value="Popular"/>
                <Option value="name"/>
                <Option value="view count"/>
            </Select>

            <Select name="Category">
                <Option value="All"/>
                <Option value="Technology"/>
                <Option value="Programming"/>
                <Option value="General"/>
            </Select>
        </section>
    );
}
export default Toolbar;