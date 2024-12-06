import Textarea from "../../sharedUi/textarea/Textarea";
function Editor(){
    return(
        <section className="mt-120">
            <p className="fs-4 text-secondary">Your content will appear from here...</p>
            <Textarea/>
        </section>
    );
}
export default Editor;