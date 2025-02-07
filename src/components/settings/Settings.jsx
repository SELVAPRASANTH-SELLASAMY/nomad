import { useState } from "react";
import ProfileSettings from "../profileSettings/ProfileSettings";
import PasswordSettings from "../passwordSettings/PasswordSettings";
function Settings(){
    const [activePage,setActivePage] = useState('profile');

    const options = [
        {label:"Profile settings",value:"profile",clickEvent:() => setActivePage('profile')},
        {label:"Password",value:"password",clickEvent:() => setActivePage('password')}
    ];
    
    return(
        <>
            <div className="w-100 fixed top-0 bg-common-blue z-index-1">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">Settings</h2>
                <h6 className="fs-4 font-weight-500 text-secondary">Here you can control everything.</h6>
            </div>
            <div className="d-flex">
                <aside className="w-13rem fixed top-0 pt-9 bg-common-blue h-100">
                    {
                        options.map((option,index) => (
                            <button key={index} onClick={option.clickEvent} type="button" className={`fs-4 mtb-15 pointer d-flex no-bg ${activePage === option.value ? 'text-primary' : 'text-white'}`}
                            >{option.label}</button>
                        ))
                    }
                </aside>
                <div className="ml-13 mt-10">
                {
                    activePage === 'profile' ? <ProfileSettings/> : <PasswordSettings/>
                }
                </div>
            </div>
        </>
    );
}
export default Settings;