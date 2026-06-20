import { Outlet } from "react-router-dom";
import { Header } from "../components";
function Layout(){
    return(
        <>
            <Header/>
            <main id="container" className="px-xl py-xl">
                <Outlet/>
            </main>
        </>
    );
}
export default Layout;