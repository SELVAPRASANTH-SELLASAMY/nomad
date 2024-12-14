import { useEffect, useState } from "react";
import Blogtile from "../blogtile/Blogtile";
import Axios from "axios";
function Blogs(){
    const [blogs,setBlogs] = useState(null);
    useEffect(()=>{
        Axios.get("http://localhost:3001/nomad/fetchblogs")
        .then((res)=>{
            if(res.status !== 200){
                console.error(res.data.response);
                console.error(res.data.error);
            }
            else{
                setBlogs(res.data.response);
                console.log(res.data.response);
            }
        })
        .catch((error) => {
            console.log("Something went wrong...");
            console.error(error.response);
        })
    },[]);
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