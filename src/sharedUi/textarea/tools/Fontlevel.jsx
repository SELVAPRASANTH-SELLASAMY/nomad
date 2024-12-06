import { Select } from "../../select";
function Fontlevel(){
    return(
        <Select
            options={["Heading","Sub heading","paragraph","blockquote","Article"]}
            Styles={"bg-common-blue"}
        />
    );
}
export default Fontlevel;