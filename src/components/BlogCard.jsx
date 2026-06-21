import dummyThumbnail from "../assets/blog-manager.png";
import { MdMoreVert } from "react-icons/md";
function BlogCard(){
    return(
        <div className="bg-tile-blue pd-lg rounded-md border-sm-gray d-flex flex-col gap-lg">
            <div className="d-flex items-center space-between">
                <p className="fs-xsm primary uppercase px-lg py-sm bg-l-green rounded-full w-fit">Frontend Development</p>
                <p className="fs-xsm secondary">06 Jun 2026</p>
            </div>

            <div className="rounded-md no-overflow ratio-2-1 relative">
                <img className="w-full middle" src={dummyThumbnail} alt="Blog-Thumbnail"/>
                <span className="bg-tile-blue-tr border-sm-gray fs-lg absolute top-sm right-sm rounded-full w-2 ratio-equal d-flex items-center justify-center">
                    <MdMoreVert/>
                </span>
            </div>

            <h3 className="fs-md bold-normal">Building scalable web applications</h3>
            <p className="fs-sm secondary lh-xsm">Learn how to build scalable and maitainable web applications with modern technologies.</p>

            <hr className="border-sm-gray"/>

            <div className="d-flex gap-md items-center">
                <span className="w-2_5 ratio-equal bg-dark-blue border-sm-gray rounded-full d-block no-overflow bg-cover">
                    <img className="w-full middle" src={dummyThumbnail} alt="autor-profile" />
                </span>
                <p className="fs-sm uppercase">Prasanth</p>
            </div>
        </div>
    );
}

export default BlogCard;