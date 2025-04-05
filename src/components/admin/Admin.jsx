import { FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";
import StatCard from "../statCard/StatCard";
import AdminButtons from "./AdminButtons";
import AddUser from "./AddUser";
import UsersList from "../usersList/UsersList";
import { useState, useRef } from "react";
function Admin(){
    const [userMeta,setUserMeta] = useState({
        usersCount: 0, 
        approvedCount: 0, 
        unApprovedCount: 0
    });

    const addUserRef = useRef(null);
    
    return(
        <section>
            <h3 className="fs-5_5 font-weight-500">Accounts</h3>
            <p className="text-secondary">Manage users and access.</p>
            <div className="mt-1 d-flex gap-1">
                <StatCard icon={<FiUsers/>} title="Total Users" count={userMeta?.usersCount}/>
                <StatCard icon={<FiUserCheck/>} title="Approved Users" count={userMeta?.approvedCount}/>
                <StatCard icon={<FiUserX/>} title="Un approved Users" count={userMeta?.unApprovedCount}/>
            </div>
            <AdminButtons addUserRef={addUserRef}/>
            <AddUser ref={addUserRef}/>
            <UsersList setUserMeta={setUserMeta}/>
        </section>
    );
}
export default Admin;