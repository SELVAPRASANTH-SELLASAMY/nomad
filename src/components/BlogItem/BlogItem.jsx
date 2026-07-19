import dummyThumbnail from "../../assets/blog-manager.png"
import dummyAvatar from "../../assets/dummy-avatar.png";
import BlogAction from "./BlogAction";
import "./blogItem.css";

function BlogCard({view}){
    return(
        <div className={`${view === 'grid' ? 'd-flex flex-col' : 'd-grid list-container'} gap-2md bg-tile-blue rounded-lg border-sm-gray pd-lg`}>
            <div className={`${view === 'list' && 'category'} d-flex items-center space-between`}>
                <p className="fs-xsm primary uppercase px-lg py-sm bg-mint rounded-full w-fit no-wrap no-overflow ellipsis max-w-80p">Frontend Development</p>
                {
                    view === 'grid' ? 
                        <p className="fs-xsm secondary">06 Jun 2026</p>
                        : 
                        <BlogAction view={view}/>
                }
            </div>

            {
                view === 'grid' ?
                    <div className="rounded-md ratio-15-10 relative">
                        <img className="w-full rounded-md middle" src={dummyThumbnail} alt="Blog-Thumbnail"/>
                        <BlogAction view={view}/>
                    </div>
                : <img className="thumbnail rounded-md" src={dummyThumbnail} alt="Blog-Thumbnail"/>
            }

            <h3 title="Empty" className={`${view === 'list' && 'title'} fs-md bold-normal line-clamp-2 lh-xsm`}>Building scalable web applications using modern javascript framework (ReactJs)</h3>
            <p title="Empty" className={`${view === 'list' && 'summary'} fs-sm secondary lh-xsm line-clamp-2`}>Learn how to build scalable and maitainable web applications with modern technologies.</p>

            {view === 'grid' && <hr className="line-hr border-xsm-gray"/>}

            <div className={`${view === 'list' && 'author'} d-flex gap-md items-center`}>
                <span className="w-2 ratio-equal bg-dark-blue border-sm-gray rounded-full d-block no-overflow bg-cover">
                    <img className="w-full middle" src={dummyAvatar} alt="autor-profile" />
                </span>
                <p className="fs-sm uppercase">Prasanth</p>
                {view === 'list' && <p className="fs-xsm secondary ml-auto">06 Jun 2026</p>}
            </div>
        </div>
    );
}

export default BlogCard;