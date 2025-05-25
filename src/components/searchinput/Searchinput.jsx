import { debounce } from "lodash";
import { IoSearchSharp } from "react-icons/io5";
function Searchinput({setSearch}){
    const handleInput = debounce((e) => {
        const val = e.target.value;
        (val.length > 3 || val.length === 0) && setSearch(val);
    },[500]);

    return(
        <div style={{marginLeft:"auto"}} className="search-field fs-5 fs-6_L_768 fs-5_5_L_500 bg-common-blue bg-none_L_768 d-iflex pl-1 pl-0_L_768 center-y rounded-100px trans-border-250 search-border-none_L_768">
            <IoSearchSharp/>
            <input
                onChange={handleInput}
                className="search-input fs-4 w-20rem ptb-05 rounded-100px no-border no-outline text-white bg-common-blue plr-05 d-none_L_768"
                type="search" 
                id="search" 
                name="search" 
                placeholder="Search" 
                autoComplete="off"
            />
        </div>
    );
}

export default Searchinput;