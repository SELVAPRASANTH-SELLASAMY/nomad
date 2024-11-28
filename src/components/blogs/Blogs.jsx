import Blogtile from "../blogtile/Blogtile";
function Blogs(){
    const blogs = [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ]
    return(
        <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-10">
            {
                blogs.map((_,index)=>(
                    <Blogtile key={index}/>
                ))
            }
        </section>
    )
}
export default Blogs;