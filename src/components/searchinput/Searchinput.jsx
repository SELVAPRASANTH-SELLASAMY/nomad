import { debounce } from "lodash";
import { IoSearchSharp } from "react-icons/io5";
function Searchinput({setSearch}){
    const handleInput = debounce((e) => {
        const val = e.target.value;
        (val.length > 3 || val.length === 0) && setSearch(val);
    },[500]);

    return(
        <div className="search-field fs-5 bg-common-blue d-iflex pl-1 center-y rounded-100px trans-border-250">
            <IoSearchSharp/>
            <input
                onChange={handleInput}
                className="search-input fs-4 w-20rem ptb-05 rounded-100px no-border no-outline text-white bg-common-blue plr-05"
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