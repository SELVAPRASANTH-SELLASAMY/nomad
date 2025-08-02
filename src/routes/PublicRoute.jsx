import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../store/zustandStore";
function PublicRoute(){
    const user = useUser(state => state.user);
    return user ? <Navigate to="/"/> : <Outlet/>;
}

export default PublicRoute;