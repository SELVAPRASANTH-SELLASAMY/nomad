import { useEffect, useState } from "react";
import { useFetch, useUpdate } from "../../customhooks/httpMethod";
import ReactSwitch from "react-switch";
function UsersList({setUserMeta}){
    const [users,setUsers] = useState([]);

    const { data, error, isPending } = useFetch('getUsers');

    const { update } = useUpdate('approve');

    useEffect(() => {
        if(data?.users){
            setUsers(data.users);
        }
    },[data]);

    const handleSwitch = ({id}) => {
        update({id},() => {
            setUsers(users.map(Obj => Obj._id === id ? {...Obj,approved: !Obj.approved} : Obj));
        },false);
    }

    useEffect(() => {
        setUserMeta((prev) => ({
            ...prev,
            usersCount: users.length,
            approvedCount: users.filter(user => user.approved).length,
            unApprovedCount: users.filter(user => !user.approved).length
        }));
    },[users,setUserMeta]);

    if(isPending || error) return <p className="mt-1 fs-4 font-weight-600 uppercase text-secondary">{isPending ? 'Loading...' : error}</p>

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