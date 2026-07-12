import { useState } from "react";
import { MdGridView, MdFormatListBulleted, MdArrowUpward } from "react-icons/md";
import { Select, BlogItem } from "../components";

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

const categories = ["All","Technology","Programming","Web development","general"];

function Blogs(){
    const [activeView,setview] = useState('grid');

    return(
        <>
            <section style={{top: "4.2em"}} className="sticky bg-dark-blue z-index-2 py-md">
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

                {/* <p className="py-lg fs-sm secondary">Discover my latest thoughts and tutorials</p> */}
                
                <div className="d-flex gap-lg w-full md-overflow-x md-scroll-snap md-hide-scrollbar py-md">
                    <Select
                        icon={<MdArrowUpward/>}
                        label="Sort by"
                        options={sortOptions}
                        defaultValue={sortOptions[0]}
                    />

                    <Select
                        icon={<MdGridView/>}
                        label="Category"
                        options={categories}
                        defaultValue={categories[0]}
                    />
                </div>
            </section>

            <section className={`${activeView === 'grid' ? `grid-template-auto-cols`: ''} d-grid gap-lg py-lg`}>
                {
                    Array.from({length: 100},(_,index) => (
                        <BlogItem 
                            key={index}
                            view={activeView}
                        /> 
                    ))
                }
            </section>
        </>
    );
}

export default Blogs;