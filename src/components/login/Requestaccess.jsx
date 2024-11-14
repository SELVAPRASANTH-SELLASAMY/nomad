import './login.css';
import { mainContext } from './Main';
import { useContext } from 'react';
function Requestaccess(){
    const setFormState = useContext(mainContext);
    return(
        <>
            <h2 className="text-primary font-weight-600 fs-8 italic">Request access!</h2>
            <h3 className="text-secondary font-weight-500 fs-5 italic">Please enter your valid email address.</h3>

            <form noValidate>
                <label htmlFor="email" className="fs-4 d-iblock mtb-1">Email</label>
                <p className="text-error mtb-1 fs-4 float-right">This field is required!</p>
                <input type="text" id='email' name='email' placeholder='Enter your mail id' autoComplete='off'/>

                <button type='button' className='btn-primary w-100 fs-4 mt-2'>send access request</button>

                <p className='fs-4 mt-2 text-centered'>Go back to <a href='/' role='button' onClick={(e)=>{e.preventDefault(); setFormState('login')}} className='request-access'>sign in</a></p>
            </form>
        </>
    );
}
export default Requestaccess;