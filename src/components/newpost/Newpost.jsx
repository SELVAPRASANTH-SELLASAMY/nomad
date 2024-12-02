import { Select } from '../../sharedUi/select';
import ActionButton from './ActionButton';
function Newpost(){
    return(
        <section>
            <h2 className="fs-6 mt-5 font-weight-600 uppercase">New post</h2>
            <div className="toolbar d-flex gap-2 w-100 mt-05">
                <Select
                    name="Category"
                    options={["All","programming","technology","general"]}
                />
                <ActionButton/>
            </div>
        </section>
    );
}
export default Newpost;