import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
import { createContext } from "react";
const BlogContext = createContext();
function Blogs(){
    const {data,setData} = useFetch("/fetchblogs");
    return(
        <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-120">
            <BlogContext.Provider value={setData}>
                {
                    data && data.map((blog)=>(
                        <Blogtile key={blog._id} blog={blog}/>
                    ))
                }
            </BlogContext.Provider>
        </section>
    )
}
export default Blogs;
export { BlogContext };