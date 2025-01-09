import Blogs from "../blogs/Blogs";
import { Select } from '../../sharedUi/select';
import { useState } from "react";
function Home(){
    const sortOptions = [
        {label:"name",value:"title"},
        {label:"publish date",value:"createdAt"},
        // {label:"popular",value:""},
        // {label:"view count",value:""}
    ];
    const [sort,setSort] = useState(sortOptions[0]);
    const [ascending,setAscending] = useState(1);
    const categoryOptions = ["All","programming","Frontend","Backend","Database","technology","general"]
    const [category,setCategory] = useState(categoryOptions[0]);
    return(
        <>
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 plr-25 z-index-85">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">Blogs</h2>
                <div className="toolbar d-flex gap-2 w-100 mt-05">
                    <Select
                        name="Sort by"
                        options={sortOptions}
                        value={sort}
                        setValue={setSort}
                        setAscending={setAscending}
                        ascending={ascending}
                    />
                    <Select
                        name="Category"
                        options={categoryOptions}
                        value={category}
                        setValue={setCategory}
                    />
                </div>
            </section>
            <Blogs 
                ascending={ascending} 
                sort={sort.value}
            />
        </>
    );
}
export default Home;