import { MdOutlineModeEditOutline } from "react-icons/md";
function Actions({actionlist}){
    return(
        <ul className="absolute top-100 right-0 text-no-wrap no-list bg-tile-blue rounded-lg no-overflow border-sm-gray mt-sm z-index-3">
            {
                actionlist.map((action,index) => (
                    <li key={`action_${index}`} className={`py-md px-md d-flex gap-md items-center border-bottom-sm-gray ${action.warn === true ? 'text-error' : ''}`}>
                        <span className="d-flex fs-md">
                            <action.icon/>
                        </span>
                        <p className="fs-sm capitalize">{action.name}</p>
                    </li>
                ))
            }
        </ul>
    );
}

export default Actions;