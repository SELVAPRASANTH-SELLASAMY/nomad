function TextComposer({value}){
    return(
        <div className="text_composer" dangerouslySetInnerHTML={{__html:value}}></div>
    );
}
export default TextComposer;