import { useSearchParams } from "react-router-dom";
import './textcomposer.css';
import { useFetch } from "../../customhooks/httpMethod";
function TextComposer(){
    const [queryParams] = useSearchParams();
    const Id = queryParams.get("id"); //TODO: If the id isn't valid it should go to the 404 page
    const {data} = useFetch(`/getcontent?id=${Id}`);
    return(
        <section className="text_composer">
            {
                data && 
                    <>
                        <h2>
                            {data.title}
                            <span className="bottomline"></span>
                        </h2>
                        <div dangerouslySetInnerHTML={{__html:data.content}}></div>
                    </>
            }
        </section>
    );
}
export default TextComposer;