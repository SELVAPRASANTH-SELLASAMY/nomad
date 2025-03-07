import { createContext, useRef, useState } from 'react';
import './App.css';
import { Header, Login, Sidebar, Home, Newpost, TextComposer, Settings, NotFound } from './components';
import { Confirm, Message } from './modals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
const AppContext = createContext();
function App(){
  const FlashConfirm = useRef();
  const FlashMsg = useRef();
  const [showNavbar,setShowNavbar] = useState(false);
  const [search,setSearch] = useState('');
  return(
    <AppContext.Provider value={{FlashConfirm,FlashMsg}}>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Confirm/>
        <Message/>
        <Routes>
          <Route path='/' element={<Header setSearch={setSearch} setShowNavbar={setShowNavbar}/>}>
            <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>}>
                <Route index element={<Home search={search}/>}/>
                <Route path='editor' element={<Newpost/>}/>
              </Route>
              <Route path='blog' element={<TextComposer/>}/>
              <Route path='settings' element={<Settings/>}/>
            </Route>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
export { AppContext };