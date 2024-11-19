import { createContext, useRef } from 'react';
import './App.css';
import { Header, Login, Flash } from './components';
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
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
export { AppContext };