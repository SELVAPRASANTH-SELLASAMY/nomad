import { MdPersonRemoveAlt1, MdPersonAddAlt1 } from "react-icons/md";
function AdminButtons({addUserRef}){
    const addUser = () => {
        addUserRef?.current.showModal();
    }

    const removeUsers = () => {
        console.log("Logic to remove users");
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