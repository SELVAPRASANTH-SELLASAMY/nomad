import { Alignments, Attachment, Fontlevel, List, Textdecoration } from "./tools";
function Textarea(){
    return(
        <>
            <textarea name="text-editor" id="text-editor" className="w-100 h-5rem resize-vertical bg-tile-blue text-white plr-1 ptb-05 fs-4 no-outline border-grey-01 rounded-05 mt-1 trans-border-250" placeholder="Enter your text here..."></textarea>
            <div className="tools d-flex bg-tile-blue border-grey-01 rounded-05 gap-1 center-y ptb-025 plr-1">
                <Fontlevel/>
                <Textdecoration/>
                <List/>
                <Alignments/>
                <Attachment/>
            </div>
        </>
    );
}
export default Textarea;