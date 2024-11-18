import { createContext, useRef } from 'react';
import { Login, Flash } from '../components';
const AppContext = createContext();
function Main(){
    const flashMessage = useRef();
    return(
        <main>
            <AppContext.Provider value={flashMessage}>
                <Login/>
                <Flash/>
            </AppContext.Provider>
        </main>
    );
}
export { Main, AppContext };