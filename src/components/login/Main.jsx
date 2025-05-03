import Login from './Login';
import Resetpassword from './Resetpassword';
import Setnewpassword from './Setnewpassword';
import Requestaccess from './Requestaccess';
import Pictureframe from './Pictureframe';
import { useState } from 'react';
import { createContext } from 'react';
const mainContext = createContext();
function Main(){
    const [formState,setFormState] = useState('login');
    return(
        <>
            <section className="w-50 h-100 h-min-700px d-iblock content-centered">
                <mainContext.Provider value={setFormState}>
                    {formState === 'login' ? <Login/> : formState === 'reset_password' ? <Resetpassword/> : formState === 'set_new_password' ? <Setnewpassword/> : <Requestaccess/>}
                </mainContext.Provider>
            </section>
            <Pictureframe/>
        </>
    );
}
export default Main;
export { mainContext };