import Toolbar from "../toolbar/Toolbar";
import Blogtile from "../blogtile/Blogtile";
function Home(){
    return(
        <section>
            <h2 className="fs-6 mt-5 font-weight-600 uppercase">Blogs</h2>
            <Toolbar/>
            <Blogtile/>
        </section>
    );
}
export default Home;