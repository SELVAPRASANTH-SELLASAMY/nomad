import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
import { useEffect, useReducer, useRef } from "react";
import { debounce } from "lodash";
import ShimmerEffect from '../../sharedUi/shimmerEffect/ShimmerEffect';
function Blogs({ascending,sort,category,search}){
    const bottomMargin = useRef(null);

    const blogReducer = (state,action) => {
        switch(action.type){
            case "SET_BLOGS":
                return{
                    ...state,
                    blogs: [...state.blogs,...action.payload],
                };
            case "DEL_BLOG":
                return{
                    ...state,
                    blogs: [...state.blogs].filter((blog) => blog._id !== action.id)
                };
            case "INC_PAGE":
                return{
                    ...state,
                    page: state.page + 1
                };
            case "RESET_BLOGS":
                return{
                    ...state,
                    blogs:[],
                    page:1
                }
            default:
                return state;
        }
    }

    const [State,dispatch] = useReducer(blogReducer,{
        blogs:[],
        page:1
    });

    const { data, error, isPending } = useFetch(`blog/fetch?page=${State.page}&sortby=${sort}&ascending=${ascending}&category=${category}&search=${search}`);

    useEffect(() => {
        if(data?.hasMore){
            const Observer = new IntersectionObserver(debounce((entries) => {
                if(entries[0].isIntersecting){
                    dispatch({type:"INC_PAGE"});
                    Observer.unobserve(entries[0].target);
                }
            },500));
            bottomMargin.current && Observer.observe(bottomMargin.current);
            return () => Observer.disconnect();
        }
    },[data]);

    useEffect(() => {
        if(data?.data){
            dispatch({type:"SET_BLOGS",payload:data.data});
        }
    },[data]);

    useEffect(() => {
        dispatch({type:"RESET_BLOGS"});
    },[ascending,sort,category,search]);

    return(
        <>
            <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-120">
                {
                    (State.blogs).map((blog)=>(
                        <Blogtile key={blog._id} blog={blog} blogDispatcher={dispatch}/>
                    ))
                }
                {
                    isPending ? 
                    Array.from({length:5},(_,index) => (
                        <ShimmerEffect key={index}/>
                    ))
                    : error?.message && <p className="fs-5_5 font-weight-600 uppercase text-secondary">{error.message}!</p>
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