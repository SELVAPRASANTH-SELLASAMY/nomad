import { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
function UsersList({setUserMeta}){
    const [users,setUsers] = useState([
        {_id:1,name:"Selvaprasanth",email:"prasanthsamy61@gmail.com",approved:true},
        {_id:2,name:"Tom Cruise",email:"tommy@gmail.com",approved:false},
        {_id:3,name:"steve rogers",email:"rogers@gmail.com",approved:true},
        {_id:4,name:"Virginia gardner",email:"virginia@gmail.com",approved:true},
        {_id:5,name:"Emma watson",email:"emma@gmail.com",approved:false},
    ]);

    const handleSwitch = ({id}) => {
        setUsers(users.map(user => user._id === id ? {...user,approved: !user.approved} : user));
    }

    useEffect(() => {
        setUserMeta((prev) => ({
            ...prev,
            usersCount: users.length,
            approvedCount: users.filter(user => user.approved).length,
            unApprovedCount: users.filter(user => !user.approved).length
        }));
    },[users,setUserMeta]);

    return(
        <table style={{borderCollapse:'collapse'}} className="bg-tile-blue w-100 mtb-1 rounded-05 hide-overflow shadow-primary">
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th className="fs-4 text-start font-weight-500 ptb-05 plr-05">Name</th>
                    <th className="fs-4 text-start font-weight-500 ptb-05 plr-05">Email</th>
                    <th className="fs-4 text-start font-weight-500 ptb-05 plr-05">Status</th>
                    <th className="fs-4 text-start font-weight-500 ptb-05 plr-05">Access</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user._id}>
                            <td className="text-centered">
                                <input type="checkbox"/>
                            </td>
                            <td className="fs-4 p-05">{user.name}</td>
                            <td className="fs-4 p-05">
                                <a className="font-weight-400 text-white" href={`mailto:${user.email}`}>{user.email}</a>
                            </td>
                            <td className="fs-4 p-05">{user.approved ? 'Approved' : 'Unapproved'}</td>
                            <td className="fs-4 p-05">
                                <ReactSwitch 
                                    onChange={() => handleSwitch({id:user._id})}
                                    checked={user.approved}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={15}
                                    width={40}
                                    handleDiameter={24}
                                    onColor="#72E2AE"
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
export default UsersList;