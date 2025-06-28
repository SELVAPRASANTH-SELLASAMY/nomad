import { useNavControls } from "../../store/zustandStore";
import useWindowWidth from "../../customhooks/useWindowWidth";
function SideBar({activePage,options}){
    const displayNav = useNavControls(state => state.display);
    const handleNavDisplay = useNavControls(state => state.handleDisplay);
    const windowWidth = useWindowWidth();

    const handleClick = () => {
        if(windowWidth <= 768) handleNavDisplay();
    }

    if(((windowWidth > 768) || (windowWidth <= 768 && displayNav))){
        return(
            <aside onClick={handleClick} className="w-13rem fixed top-0 pt-9 bg-common-blue h-100">
                {
                    options.map((option,index) => (
                        <button key={index} onClick={option.clickEvent} type="button" className={`fs-4 mtb-15 pointer d-flex no-bg ${activePage === option.value ? 'text-primary' : 'text-white'}`}
                        >{option.label}</button>
                    ))
                }
            </aside>
        );
    }
}
export default SideBar;