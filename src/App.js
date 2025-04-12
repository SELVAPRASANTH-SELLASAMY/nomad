import { useState } from 'react';
import './App.css';
import { Header, Login, Sidebar, Home, Newpost, TextComposer, Settings, NotFound } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
function App(){
  const [showNavbar,setShowNavbar] = useState(false);
  const [search,setSearch] = useState('');
  return(
    <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
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
  );
}

export default App;