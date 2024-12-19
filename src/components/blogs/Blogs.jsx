import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
function Blogs(){
    const blogs = useFetch("http://localhost:3001/nomad/fetchblogs");
    return(
        <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-120">
            {
                blogs && blogs.map((blog)=>(
                    <Blogtile key={blog._id} blog={blog}/>
                ))
            }
        </section>
    )
}
export default Blogs;