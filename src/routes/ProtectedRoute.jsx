import { useNavigate, Outlet } from "react-router-dom";
import { useFetch } from "../customhooks/httpMethod";
import { useEffect } from "react";
import { useUser } from "../store/userStore";
function ProtectedRoute({children}){
    const { data, isPending } = useFetch('/check-auth');
    const navigate = useNavigate();
    const setUser = useUser(state => state.setUser);

    useEffect(() => {
        if(data?.authenticated && data?.user){
            setUser(data.user);
        }
        else if(!isPending){
            navigate("/login",{replace:true});
        }
    },[data,isPending,navigate,setUser]);

    if(isPending){
        return <p className="mt-5 fs-5_5 font-weight-600 text-secondary">Checking Authentication...</p>
    }

    return (
        <Outlet>
            {data?.authenticated ? children : null}
        </Outlet>
    );
}

export default ProtectedRoute;