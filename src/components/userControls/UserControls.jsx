import { MdOutlineSettings, MdOutlineLogout } from "react-icons/md";
function UserControls(){
    const controls = [
        {icon:<MdOutlineSettings/>,name:"Settings"},
        {icon:<MdOutlineLogout/>,name:"Sign out"}
    ];
    return(
        <ul className='w-10rem border-grey-01 rounded-05 hide-overflow bg-tile-blue absolute right-0 top-25'>
            {
                controls.map((control) => (
                    <li className='fs-5_5 d-flex center-y gap-05 ptb-05 pl-1 hover-blue'>
                        {control.icon}
                        <span className='fs-4 text-no-wrap'>{control.name}</span>
                    </li>
                ))
            }
        </ul>
    );
}
export default UserControls;