import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
import { createContext, useEffect, useRef, useState } from "react";
const BlogContext = createContext();
function Blogs(){
    const bottomMargin = useRef(null);
    const [page,setPage] = useState(1);
    const {data} = useFetch("/fetch",page);

    const [blogs,setData] = useState([]);

    useEffect(() => {
        if(data && data.hasMore){
            const Observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting){
                    setPage((prev) => prev + 1);
                    Observer.unobserve(entries[0].target);
                }
            });
            bottomMargin.current && Observer.observe(bottomMargin.current);
            return () => Observer.disconnect();
        }
    },[data]);

    useEffect(() => {
        if(data && data.data){
            setData((prevBlogs) => {
                return [...prevBlogs,...(data.data)];
            });
        }
    },[data]);

    return(
        <>
            <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-120">
                <BlogContext.Provider value={setData}>
                    {
                        (blogs.length > 0) && blogs.map((blog)=>(
                            <Blogtile key={blog._id} blog={blog}/>
                        ))
                    }
                </BlogContext.Provider>
            </section>
            {(data && data.data) && <div className="bottom_margin h-25 rounded-100px no-bg" ref={bottomMargin} style={{height:".25rem"}}></div>}
        </>
    )
}
export default Blogs;
export { BlogContext };