import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useFetch } from "../customhooks/httpMethod";
import { useEffect } from "react";
function ProtectedRoute({children}){
    const { data, error, isPending } = useFetch('/check-auth');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(!isPending && error?.authenticated === false){
            navigate("/login",{replace:true});
            window.history.replaceState(null,null,location.pathname);
        }
    },[error,isPending,navigate,location.pathname]);

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