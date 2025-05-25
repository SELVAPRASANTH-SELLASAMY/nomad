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
        <div className="d-flex align-items-center gap-2 flex-col_L_768 mtb-2_L_768">
            <section className="h-100 h-auto_L_768 h-min-700px h-min-0_L_768 content-centered">
                <h1 className="text-primary fs-7 uppercase mb-2_L_768">Nomad</h1>
                <div className='content-centered mtb-3 mtb-0_L_768'>
                    <mainContext.Provider value={setFormState}>
                        {formState === 'login' ? <Login/> : formState === 'reset_password' ? <Resetpassword/> : formState === 'set_new_password' ? <Setnewpassword/> : <Requestaccess/>}
                    </mainContext.Provider>
                </div>
            </section>
            <Pictureframe/>
        </div>
    );
}
export default Main;
export { mainContext };