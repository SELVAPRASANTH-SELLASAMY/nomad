import Blogs from "../blogs/Blogs";
import { Select } from '../../sharedUi/select';
import { useEffect, useMemo } from "react";
import { useBlogManager, useBlogCategory } from "../../store/BlogStore";
function Home(){
    const { fetchCategories, categories } = useBlogCategory();

    useEffect(() => {
        fetchCategories();
    },[]);

    const sortOptions = useMemo(() => [
        {label:"name",value:"title"},
        {label:"publish date",value:"createdAt"}
    ],[]);

    const { sort, category, sortOrder } = useBlogManager(state => state.filters);
    const setSort = useBlogManager(state => state.setSort);
    const setCategory = useBlogManager(state => state.setCategory);
    const changeSortOrder = useBlogManager(state => state.changeSortOrder);

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
                        setAscending={changeSortOrder}
                        ascending={sortOrder}
                    />
                    <Select
                        name="Category"
                        options={categories}
                        value={category}
                        setValue={setCategory}
                    />
                </div>
            </section>
            <Blogs 
                ascending={sortOrder} 
                sort={sort?.value}
                category={category}
            />
        </>
    );
}

export default Home;