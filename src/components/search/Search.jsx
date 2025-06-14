import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import MobileSearch from "./MobileSearch";

function Search({setSearch}){
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    },[]);

    if(windowWidth <= 768) return <MobileSearch setSearch={setSearch}/>;

    return <SearchInput setSearch={setSearch}/>;
}

export default Search;