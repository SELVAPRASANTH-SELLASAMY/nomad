import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, PortalAccess, Blogs, NotFound } from "./pages";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<PortalAccess/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;