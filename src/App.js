import { createContext, useRef, useState } from 'react';
import './App.css';
import { Header, Login, Flash, Sidebar, Home, Newpost, TextComposer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AppContext = createContext();
function App(){
  const flashMessage = useRef();
  const [showNavbar,setShowNavbar] = useState(false);
  return(
    <AppContext.Provider value={flashMessage}>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Flash/> {/*To display errors and success messages*/}
        <Routes>
          <Route path='/' element={<Header setShowNavbar={setShowNavbar}/>}>
            <Route index element={<Login/>}/>
            <Route path='home' element={<Sidebar showNavbar={showNavbar}/>}>
              <Route index element={<Home/>}/>
              <Route path='newpost' element={<Newpost/>}/>
              <Route path='blog' element={<TextComposer/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
export { AppContext };