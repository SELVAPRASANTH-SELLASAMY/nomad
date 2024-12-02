import { Select } from '../../sharedUi/select';
import ActionButton from './ActionButton';
import PrimaryInput from '../../sharedUi/PrimaryInput';
import { useState } from 'react';
function Newpost(){
    const [heading,setHeading] = useState();
    const [error,setError] = useState();
    return(
        <>
            <section className="fixed top-0 left-0 bg-common-blue w-100 pb-15 plr-25">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">New post</h2>
                <div className="toolbar d-flex gap-2 w-100 mt-05">
                    <Select
                        name="Category"
                        options={["All","programming","technology","general"]}
                    />
                    <ActionButton/>
                </div>
            </section>
            <section className="mtb-15 mt-120">
                <PrimaryInput
                    id="heading"
                    type="text"
                    placeholder="Enter your heading here..."
                    response_message={error}
                    setValue={heading}
                    rect
                />
            </section>
        </>
    );
}
export default Newpost;