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
            if(res.status !== 200){
                if(res.status === 404){
                    console.log("Requested content no found");
                    return;
                }
                console.error(res.data.response);
                console.error(res.data.error);
            }
            else{
                setContent(res.data.response);
            }
        })
        .catch((error) => {
            console.log("Something went wrong...");
            console.error(error.response);
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