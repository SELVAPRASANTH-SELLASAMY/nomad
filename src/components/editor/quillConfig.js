const handleToggle = () => {
  alert("Write a logic to toggle editor in fullscreen mode...");
}
const modules = {
    toolbar: {
      container:[
        [{ header: [3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "blockquote"],
        //[{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["toggleFullScreen"]
      ],
      handlers:{
        toggleFullScreen:handleToggle
      }
    }
};

export { modules };