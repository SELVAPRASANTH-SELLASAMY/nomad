const toggleFullScreen = (quillInstance) => {
    const editor = quillInstance.current.container.closest('.quill-element');
    if(editor){
        editor.classList.toggle('editor-fullscreen');
    }
}
const QuillConfig = (quillInstance) =>({
    theme:'snow',
    modules: {
        toolbar: {
            container: [
                [{header:[3, 4, 5, 6, false]}],
                ['bold','italic','underline'],
                [{list:'ordered'},{list:'bullet'},'blockquote'],
                ['link','image'],
                ['fullscreen-mode'],
                ['clean']
            ],
            handlers: {
                'fullscreen-mode': () => toggleFullScreen(quillInstance)
            }
        }
    }
})
export { QuillConfig };