import { createContext, useRef } from 'react';
import './App.css';
import { Header, Login, Flash, Sidebar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AppContext = createContext();
function App(){
  const flashMessage = useRef();
  return(
    <AppContext.Provider value={flashMessage}>
      <Router>
        <Flash/> {/*To display errors and success messages*/}
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Login/>}/>
            <Route path='/home' element={<Sidebar/>}>
              <Route index element={<Login/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
export { AppContext };