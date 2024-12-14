import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Axios from 'axios';
function TextComposer(){
    const [queryParams] = useSearchParams();
    const [content,setContent] = useState(null);
    useEffect(()=>{
        Axios.get(`http://localhost:3001/nomad/getcontent?id=${queryParams.get("id")}`)
        .then((res)=>{
            if(res.status !== 200){
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
        <>
            {
                content && <div className="text_composer" dangerouslySetInnerHTML={{__html:content.content}}></div>
            }
        </>
    );
}
export default TextComposer;