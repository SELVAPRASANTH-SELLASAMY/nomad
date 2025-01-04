import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import TileLoadingAnimation from '../../sharedUi/select/TileLoadingAnimation/TileLoadingAnimation';
function Blogs(){
    const bottomMargin = useRef(null);

    const [State,setState] = useState({
        isPending:true,
        blogs:[],
        page:1
    })

    const {data} = useFetch("/fetch",State.page);

    useEffect(() => {
        if(data && data.hasMore){
            const Observer = new IntersectionObserver(debounce((entries) => {
                if(entries[0].isIntersecting){
                    setState((prevState) => {
                        const copy = {...prevState};
                        copy.isPending = true;
                        copy.page = (prevState.page + 1);
                        return copy;
                    })
                    Observer.unobserve(entries[0].target);
                }
            },1000));
            bottomMargin.current && Observer.observe(bottomMargin.current);
            return () => Observer.disconnect();
        }
    },[data,setState]);

    useEffect(() => {
        if(data?.data){
            setState((prevState) => {
                const copy = {...prevState};
                copy.blogs = [...(prevState.blogs),...(data.data)];
                copy.isPending = false;
                return copy;
            });
        }
    },[data,setState]);

    return(
        <>
            <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-120">
                {
                    (State.blogs).map((blog)=>(
                        <Blogtile key={blog._id} blog={blog} setState={setState}/>
                    ))
                }
                {
                    State.isPending && 
                    Array.from({length:5},(_,index) => (
                        <TileLoadingAnimation key={index}/>
                    ))
                }
            </section>
            {
                (data?.data) && 
                <div className="bottom_margin h-25 rounded-100px no-bg" ref={bottomMargin} style={{height:".25rem"}}></div>
            }
        </>
    )
}
export default Blogs;