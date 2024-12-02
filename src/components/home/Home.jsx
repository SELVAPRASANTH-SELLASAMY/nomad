import Blogs from "../blogs/Blogs";
import { Select } from '../../sharedUi/select';
function Home(){
    return(
        <>
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 plr-25">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">Blogs</h2>
                <div className="toolbar d-flex gap-2 w-100 mt-05">
                    <Select
                        name="Sort by"
                        options={["publish date","popular","name","view count"]}
                    />
                    <Select
                        name="Category"
                        options={["All","programming","technology","general"]}
                    />
                </div>
            </section>
            <Blogs/>
        </>
    );
}
export default Home;