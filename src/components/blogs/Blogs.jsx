import Blogtile from "../blogtile/Blogtile";
import { useFetch } from "../../customhooks/httpMethod";
import { useEffect, useReducer, useRef } from "react";
import { debounce } from "lodash";
import TileLoadingAnimation from '../../sharedUi/shimmerEffect/ShimmerEffect';
function Blogs({ascending,sort}){
    const bottomMargin = useRef(null);

    const blogReducer = (state,action) => {
        switch(action.type){
            case "SET_BLOGS":
                return{
                    ...state,
                    blogs: [...state.blogs,...action.payload],
                    isPending: false
                };
            case "DEL_BLOG":
                return{
                    ...state,
                    blogs: [...state.blogs].filter((blog) => blog._id !== action.id)
                };
            case "LOADING":
                return{
                    ...state,
                    isPending: true
                };
            case "INC_PAGE":
                return{
                    ...state,
                    page: state.page + 1
                };
            case "RESET_BLOGS":
                return{
                    ...state,
                    isPending:true,
                    blogs:[],
                    page:1
                }
            default:
                return state;
        }
    }

    const [State,dispatch] = useReducer(blogReducer,{
        isPending:true,
        blogs:[],
        page:1
    });

    const { data } = useFetch(`/fetch?page=${State.page}&sortby=${sort}&ascending=${ascending}`);

    useEffect(() => {
        if(data?.hasMore){
            const Observer = new IntersectionObserver(debounce((entries) => {
                if(entries[0].isIntersecting){
                    dispatch({type:"LOADING"});
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
    },[ascending,sort]);

    return(
        <>
            <section className="d-grid grid-auto-fill gap-2 mtb-15 mt-120">
                {
                    (State.blogs).map((blog)=>(
                        <Blogtile key={blog._id} blog={blog} blogDispatcher={dispatch}/>
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