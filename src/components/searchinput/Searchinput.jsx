import { debounce } from "lodash";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
function Searchinput({setSearch}){
    const [searchFocus,setSearchFocus] = useState(false);
    
    const handleInput = debounce((e) => {
        const val = e.target.value;
        (val.length > 3 || val.length === 0) && setSearch(val);
    },[500]);

    return(
        <div className={`fs-5 bg-common-blue d-iflex pl-1 center-y rounded-100px trans-border-250 ${searchFocus ? 'border-green-01' : 'border-grey-01'}`}>
            <IoSearchSharp/>
            <input 
                onFocus={()=>setSearchFocus(true)} 
                onBlur={()=>setSearchFocus(false)} 
                onChange={handleInput}
                className='fs-4 w-20rem ptb-05 rounded-100px no-border no-outline text-white bg-common-blue plr-05' 
                type="search" 
                id='search' 
                name='search' 
                placeholder='Search' 
                autoComplete='off'
            />
        </div>
    );
}
export default Searchinput;