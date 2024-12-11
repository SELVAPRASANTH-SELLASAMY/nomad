const QuillConfig = {
    theme:'snow',
    modules: {
        toolbar: [
            [{header:[3, 4, 5, 6, false]}],
            ['bold','italic','underline'],
            [{list:'ordered'},{list:'bullet'},'blockquote'],
            ['link','image'],
            ['clean']
        ]
    }
}
export { QuillConfig };