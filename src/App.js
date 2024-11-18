import { createContext, useRef } from 'react';
import './App.css';
import { Header, Login, Flash } from './components';
const AppContext = createContext();
function App() {
  const flashMessage = useRef();
  return (
    <AppContext.Provider value={flashMessage}>
      <Header/>
      <Login/>
      <Flash/>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };