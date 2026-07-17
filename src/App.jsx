import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, PortalAccess, Blogs } from "./pages";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<PortalAccess/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="*" element={<h2>Page not found!</h2>}/>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;