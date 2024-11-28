import Blogs from "../blogs/Blogs";
import Toolbar from "../toolbar/Toolbar";
function Home(){
    return(
        <>
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 plr-25">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">Blogs</h2>
                <Toolbar/>
            </section>
            <Blogs/>
        </>
    );
}
export default Home;