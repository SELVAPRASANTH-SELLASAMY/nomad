import { IoSearchSharp } from "react-icons/io5";
import { debounce } from "lodash";
import { useBlogManager } from "../../store/BlogStore";
function SearchInput({displayMobileSearch}){
    const setSearchContent = useBlogManager(state => state.handleSearch);
    const handleInput = debounce((e) => {
        const val = e.target.value;
        if(val.length > 3 || val.length === 0){
            setSearchContent(val);
            displayMobileSearch && displayMobileSearch(false);
        }
    },[500]);

    return(
        <div style={{marginLeft:"auto"}} className="search-field fs-5 bg-common-blue d-iflex pl-1 center-y justify-center rounded-100px trans-border-250">
            <IoSearchSharp/>
            <input
                onClick={(e) => e.stopPropagation()}
                onChange={handleInput}
                className="search-input fs-4 w-20rem w-100_L_425 ptb-05 rounded-100px no-border no-outline text-white bg-common-blue plr-05"
                type="search" 
                id="search" 
                name="search" 
                placeholder="Search" 
                autoComplete="off"
            />
        </div>
    );
}

export default SearchInput;