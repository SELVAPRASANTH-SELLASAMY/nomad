import { useState } from "react";
import { MdGridView, MdFormatListBulleted, MdArrowUpward } from "react-icons/md";
import { Select } from "../components";

const views = [
    {
        name: 'grid',
        icon: MdGridView
    },
    {
        name: 'list',
        icon: MdFormatListBulleted
    }
];

const sortOptions = [
    {
        label: "name",
        value: "name"
    },
    {
        label: "published date",
        value: "published-date"
    }
];

function Blogs(){
    const [activeView,setview] = useState('grid');

    return(
        <>
            <div className="d-flex items-center space-between">
                <h2 className="fs-lg uppercase bold-md">Blogs</h2>
                <div className="d-flex border-sm-gray rounded-md no-overflow">
                    {
                        views.map((view,index) => (
                            <span key={index} onClick={() => setview(view.name)} className={`fs-lg d-flex pd-sm ${activeView === view.name ? 'bg-l-green primary' : 'bg-tile-blue'}`}>
                                <view.icon/>
                            </span>
                        ))
                    }
                </div>
            </div>

            <p className="py-lg fs-sm bold-sm secondary">Discover my latest thoughts and tutorials</p>
            
            <Select
                icon={<MdArrowUpward/>}
                label="Sort by"
                options={sortOptions}
                defaultValue={sortOptions[0]}
            />
        </>
    );
}

export default Blogs;