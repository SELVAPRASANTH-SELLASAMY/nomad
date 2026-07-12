import { MdMoreVert } from "react-icons/md";
import { useState } from "react";
import { MdOutlineModeEditOutline, MdContentCopy, MdBookmarkBorder, MdOutlineDeleteForever } from "react-icons/md";
import Actions from "../Actions";

const blogActions = [
    {
        icon: MdOutlineModeEditOutline,
        name: 'edit post'
    },
    {
        icon: MdContentCopy,
        name: 'duplicate post'
    },
    {
        icon: MdBookmarkBorder,
        name: 'bookmark'
    },
    {
        icon: MdOutlineDeleteForever,
        name: 'delete post',
        warn: true
    }
];

function BlogAction({view}){
    const [relatedActions,displayRelatedActions] = useState(false);

    return(
        <span 
            tabIndex="1"
            className={`bg-tile-blue-tr border-sm-gray fs-lg rounded-full w-2 ratio-equal d-flex items-center justify-center ${view === 'grid' ? 'absolute top-sm right-sm' : 'relative'}`}
            onFocus={() => displayRelatedActions(true)}
            onBlur={() => displayRelatedActions(false)}
        >
            <MdMoreVert/>
            {
            relatedActions ? 
                <Actions
                    actionlist = {blogActions}
                />
                : null
            }
        </span>
    );
}

export default BlogAction;