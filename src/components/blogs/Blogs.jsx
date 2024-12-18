import { useEffect, useState } from "react";
import Blogtile from "../blogtile/Blogtile";
import Axios from "axios";
function Blogs(){
    const [blogs,setBlogs] = useState(null);
    useEffect(()=>{
        Axios.get("http://localhost:3001/nomad/fetchblogs")
        .then((res)=>{
            if(res.status === 200){
                setBlogs(res.data);
            }
        })
        .catch((err) => {
            if(err.response){
                const { status, data } = err.response;
                if(status === 500){
                    const { message, error } = data;
                    console.log(message+" "+error);
                }
                else{
                    console.log(data);
                }
            }
            else if(err.request){
                console.log(err.request);
            }
            else{
                console.log(err.message);
            }
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