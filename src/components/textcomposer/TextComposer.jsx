import { useSearchParams } from "react-router-dom";
import './textcomposer.css';
import { useFetch } from "../../customhooks/httpMethod";
function TextComposer(){
    const [queryParams] = useSearchParams();
    const Id = queryParams.get("id"); //TODO: If the id isn't valid it should go to the 404 page
    const content = useFetch(`http://localhost:3001/nomad/getcontent?id=${Id}`);
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