import { FiUsers, FiUserCheck, FiUserX } from "react-icons/fi";
import StatCard from "../statCard/StatCard";
import AdminButtons from "./AdminButtons";
import AddUser from "./AddUser";
import UsersList from "../usersList/UsersList";
import { useState, useRef } from "react";
import { useUser } from "../../store/zustandStore";
function Admin(){
    const [users,setUsers] = useState([]);

    const role = useUser(state => state.user?.role);

    const addUserRef = useRef(null);

    const usersRef = useRef(null);
    
    if(role === "admin"){
        return(
            <section className="mt-5 hide-overflow">
                <h3 className="fs-5_5 font-weight-500">Accounts</h3>
                <p className="text-secondary">Manage users and access.</p>
                <div className="mt-1 d-flex gap-1 overflow-x-auto scroll-snap-x-always">
                    <StatCard icon={<FiUsers/>} title="Total Users" count={users.length}/>
                    <StatCard icon={<FiUserCheck/>} title="Approved Users" count={users.filter(user => user.approved).length}/>
                    <StatCard icon={<FiUserX/>} title="Un approved Users" count={users.filter(user => !user.approved).length}/>
                </div>
                <AdminButtons addUserRef={addUserRef} usersRef={usersRef} setUsers={setUsers}/>
                <AddUser setUsers={setUsers} ref={addUserRef}/>
                <UsersList users={users} setUsers={setUsers} ref={usersRef}/>
            </section>
        );
    }
}
export default Admin;