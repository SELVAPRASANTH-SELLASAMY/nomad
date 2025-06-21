import SearchInput from "./SearchInput";
import MobileSearch from "./MobileSearch";
import useWindowWidth from "../../customhooks/useWindowWidth";

function Search({setSearch}){
    const windowWidth = useWindowWidth();

    if(windowWidth <= 768) return <MobileSearch setSearch={setSearch}/>;

    return <SearchInput setSearch={setSearch}/>;
}

export default Search;