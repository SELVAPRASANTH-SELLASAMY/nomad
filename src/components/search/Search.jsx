import SearchInput from "./SearchInput";
import MobileSearch from "./MobileSearch";
import useWindowWidth from "../../customhooks/useWindowWidth";

function Search(){
    const windowWidth = useWindowWidth();

    if(windowWidth <= 768) return <MobileSearch/>;

    return <SearchInput/>;
}

export default Search;