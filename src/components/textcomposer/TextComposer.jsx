import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from 'axios';
import './textcomposer.css';
function TextComposer(){
    const [queryParams] = useSearchParams();
    const [content,setContent] = useState(null);
    useEffect(()=>{
        Axios.get(`http://localhost:3001/nomad/getcontent?id=${queryParams.get("id")}`)
        .then((res)=>{
            if(res.status === 200){
                setContent(res.data);
            }
        })
        .catch((err) => {
            if(err.response){
                const { status, data } = err.response;
                if(status === 500){
                    const { message, error } = data;
                    console.log(message+" "+error);
                }
                else{
                    console.log(data);
                }
            }
            else if(err.request){
                console.log(err.request);
            }
            else{
                console.log(err.message);
            }
        })
    },[queryParams]);
    return(
        <section className="text_composer">
            {
                content && 
                    <>
                        <h2>
                            {content.title}
                            <span className="bottomline"></span>
                        </h2>
                        <div dangerouslySetInnerHTML={{__html:content.content}}></div>
                    </>
            }
        </section>
    );
}
export default TextComposer;