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
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 pb-1_L_500 plr-1_L_425 plr-25 plr-15_L_650 z-index-85">
                <h2 className="fs-6 mt-5 mt-4_L_500 font-weight-600 uppercase">Blogs</h2>
                <div className="toolbar d-flex gap-2 gap-1_L_500 w-100 mt-05 white-space-no-wrap overflow-x-auto_L_768 scroll-snap-x-always">
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
                category={category}
            />
        </>
    );
}
export default Home;