import { FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";
import StatCard from "../statCard/StatCard";
import AdminButtons from "./AdminButtons";
import AddUser from "./AddUser";
import UsersList from "../usersList/UsersList";
import { useState, useRef } from "react";
function Admin(){
    const [users,setUsers] = useState([]);

    const addUserRef = useRef(null);
    
    return(
        <section>
            <h3 className="fs-5_5 font-weight-500">Accounts</h3>
            <p className="text-secondary">Manage users and access.</p>
            <div className="mt-1 d-flex gap-1">
                <StatCard icon={<FiUsers/>} title="Total Users" count={users.length}/>
                <StatCard icon={<FiUserCheck/>} title="Approved Users" count={users.filter(user => user.approved).length}/>
                <StatCard icon={<FiUserX/>} title="Un approved Users" count={users.filter(user => !user.approved).length}/>
            </div>
            <AdminButtons addUserRef={addUserRef}/>
            <AddUser setUsers={setUsers} ref={addUserRef}/>
            <UsersList users={users} setUsers={setUsers}/>
        </section>
    );
}
export default Admin;