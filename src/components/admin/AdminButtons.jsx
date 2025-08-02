import { MdPersonRemoveAlt1, MdPersonAddAlt1 } from "react-icons/md";
import { useDelete } from "../../customhooks/httpMethod";
function AdminButtons({addUserRef, usersRef, setUsers}){
    const { erase } = useDelete("/removeUsers");
    const addUser = () => {
        addUserRef?.current.showModal();
    }

    const removeUsers = () => {
        const selectedUsers = usersRef.current.getSelectedUsers();
        if(selectedUsers.length > 0){
            erase(() => {
                setUsers((prev) => {
                    return prev.filter(user => !selectedUsers.includes(user._id));
                });
            },{users: selectedUsers});
        }
    }

    const buttonConfig = [
        {name: "Add", icon: <MdPersonAddAlt1/>,clickHandler: addUser},
        {name: "Remove", icon: <MdPersonRemoveAlt1/>,clickHandler: removeUsers}
    ];

    return(
        <div className="d-flex gap-1 mt-1">
            {
                buttonConfig.map((config,index) => (
                    <button key={index} onClick={config.clickHandler} className="d-flex align-items-center gap-05 ptb-025 plr-1 rounded-025 bg-tile-blue shadow-primary text-white">
                        <span className="fs-5 d-inline middle">
                            {config.icon}
                        </span>
                        <span className="fs-4 font-weight-500">
                            {config.name}
                        </span>
                    </button>
                ))
            }
        </div>
    );
}

export default AdminButtons;