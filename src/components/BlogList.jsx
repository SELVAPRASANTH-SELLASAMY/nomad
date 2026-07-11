import { useState } from "react";
import dummyThumbnail from "../assets/blog-manager.png";
import dummyAvatar from "../assets/dummy-avatar.png";
import { MdMoreVert } from "react-icons/md";
import Actions from "./Actions";
function BlogList({actionlist}){
    const [relatedActions,displayRelatedActions] = useState(false);

    return(
        <div className="bg-tile-blue rounded-lg border-sm-gray d-flex gap-lg pd-lg">
            <img className="w-20 rounded-md ratio-15-10" src={dummyThumbnail} alt="Blog-Thumbnail"/>

            <div className="d-flex flex-col gap-md">
                <div className="d-flex items-center space-between">
                    <p className="fs-xsm primary uppercase px-lg py-sm bg-l-green rounded-full w-fit no-wrap no-overflow ellipsis max-w-80p">Frontend Development</p>
                    <span 
                        tabIndex="1"
                        className="bg-tile-blue-tr border-sm-gray fs-lg rounded-full w-2 ratio-equal d-flex items-center justify-center relative"
                        onFocus={() => displayRelatedActions(true)}
                        onBlur={() => displayRelatedActions(false)}
                    >
                        <MdMoreVert/>
                        {
                            relatedActions ? 
                                <Actions
                                    actionlist = {actionlist}
                                />
                            : null
                        }
                    </span>
                </div>

                <h3 title="Empty" className="fs-md bold-normal line-clamp-1">Building scalable web applications using modern javascript framework (ReactJs)</h3>
                <p title="Empty" className="fs-sm secondary lh-xsm line-clamp-2">Learn how to build scalable and maitainable web applications with modern technologies.</p>
            
                <div className="d-flex gap-md items-center">
                    <span className="w-2 ratio-equal bg-dark-blue border-sm-gray rounded-full d-block no-overflow bg-cover">
                        <img className="w-full middle" src={dummyAvatar} alt="autor-profile" />
                    </span>
                    <p className="fs-sm uppercase">Prasanth</p>
                    <p className="fs-xsm secondary ml-auto">06 Jun 2026</p>
                </div>
            </div>
        </div>
    );
}

export default BlogList;