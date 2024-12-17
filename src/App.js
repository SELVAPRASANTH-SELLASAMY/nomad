import { createContext, useRef, useState } from 'react';
import './App.css';
import { Header, Login, Sidebar, Home, Newpost, TextComposer } from './components';
import { Confirm, Message } from './modals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AppContext = createContext();
function App(){
  const FlashConfirm = useRef();
  const FlashMsg = useRef();
  const [showNavbar,setShowNavbar] = useState(false);
  return(
    <AppContext.Provider value={{FlashConfirm,FlashMsg}}>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Confirm/>
        <Message/>
        <Routes>
          <Route path='/' element={<Header setShowNavbar={setShowNavbar}/>}>
            <Route index element={<Login/>}/>
            <Route path='home' element={<Sidebar showNavbar={showNavbar}/>}>
              <Route index element={<Home/>}/>
              <Route path='editor' element={<Newpost/>}/>
            </Route>
            <Route path='blog' element={<TextComposer/>}/>
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
export { AppContext };