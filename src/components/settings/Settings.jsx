import { useState } from "react";
import ProfileSettings from "../profileSettings/ProfileSettings";
import PasswordSettings from "../passwordSettings/PasswordSettings";
import Admin from "../admin/Admin";
import { useUser } from "../../store/zustandStore";
import SideBar from "./SideBar";

function Page({activePage}){
    switch(activePage){
        case "profile":
            return <ProfileSettings/>;
        case "password":
            return <PasswordSettings/>;
        case "admin":
            return <Admin/>;
        default:
            return <p>Page Not Found!</p>;
    }
}

function Settings(){
    const [activePage,setActivePage] = useState('profile');

    const role = useUser(state => state.user?.role);

    const options = [
        {label:"Profile settings",value:"profile",clickEvent:() => setActivePage('profile')},
        {label:"Password",value:"password",clickEvent:() => setActivePage('password')}
    ];

    if(role === "admin") options.push({label:"Administration",value:"admin",clickEvent:() => setActivePage('admin')});
    
    return(
        <main className="mt-5 ptb-05">
            <div className="fixed top-0 w-100 bg-common-blue pb-1">
                <h2 className="fs-6 mt-5 font-weight-600 uppercase">Settings</h2>
                <h6 className="fs-4 font-weight-500 text-secondary">Here you can control everything.</h6>
            </div>
            <div className="d-grid d-block_L_768 grid-temp-col-10rem_1fr">
                <SideBar options={options} activePage={activePage}/>
                <Page activePage={activePage}/>
            </div>
        </main>
    );
}
export default Settings;