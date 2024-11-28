import Toolbar from "./Toolbar";
function Newpost(){
    return(
        <section>
            <h2 className="fs-6 mt-5 font-weight-600 uppercase">New post</h2>
            <div className="mt-05 d-flex gap-2 text-no-wrap">
                <Toolbar/>
                <input type="button" value="Submit"/>
            </div>
        </section>
    );
}
export default Newpost;