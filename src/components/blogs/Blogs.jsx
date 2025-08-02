import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
import { useEffect, useMemo, useRef } from "react";
import { debounce } from "lodash";
import ShimmerEffect from '../../sharedUi/shimmerEffect/ShimmerEffect';
import { useBlogManager } from "../../store/BlogStore";
function Blogs({ascending,sort,category}){
    const { filters, cachedFilters, blogs, hasMore, setHasMore, incPage, addBlogs, clearBlogs } = useBlogManager();

    const { search, page } = filters;
    
    const bottomMargin = useRef(null);

    const { data, error, isPending } = useFetch(
        `blog/fetch?page=${page}&sortby=${sort}&ascending=${ascending}&category=${category}&search=${search}`,
        useMemo(() => [cachedFilters,JSON.stringify(filters)],[cachedFilters,filters])
    );

    useEffect(() => {
        if(data && data.hasMore !== hasMore) setHasMore(data.hasMore);
        const Observer = new IntersectionObserver(debounce((entries) => {
            if(entries[0].isIntersecting){
                incPage();
                Observer.unobserve(entries[0].target);
            }
        },500));
        bottomMargin.current && Observer.observe(bottomMargin.current);
        return () => Observer.disconnect();
    },[data,incPage,setHasMore,hasMore]);

    useEffect(() => {
        if(data?.data){
            addBlogs(data.data);
        }
    },[data,addBlogs]);

    useEffect(() => {
        const page = cachedFilters ? JSON.parse(cachedFilters).page : 0;
        if((page === filters.page) && JSON.stringify(filters) !== cachedFilters){
            clearBlogs();
        }
    },[ascending,sort,category,search,clearBlogs,cachedFilters,filters]);

    return(
        <>
            <section className="d-grid grid-auto-fill gap-2 gap-15_L_500 mtb-15 mt-120 mt-100_L_500">
                {
                    (blogs).map((blog)=>(
                        <Blogtile key={blog._id} blog={blog}/>
                    ))
                }
                {
                    isPending ? 
                    Array.from({length:5},(_,index) => (
                        <ShimmerEffect key={index}/>
                    ))
                    : error?.message && <p className="fs-5_5 font-weight-600 uppercase text-secondary">{error.message}!</p>
                }
            </section>
            {
                (hasMore) && 
                <div className="bottom_margin h-25 rounded-100px no-bg" ref={bottomMargin} style={{height:".25rem"}}></div>
            }
        </>
    )
}
export default Blogs;