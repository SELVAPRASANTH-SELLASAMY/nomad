import { useNavigate, Outlet } from "react-router-dom";
import { useFetch } from "../customhooks/httpMethod";
import { useEffect } from "react";
import { useUser } from "../store/zustandStore";
import { useLoading } from "../store/zustandStore";
function ProtectedRoute(){
    const { data, error, isPending } = useFetch('/check-auth');
    const navigate = useNavigate();
    const setUser = useUser(state => state.setUser);
    const loading = useLoading(state => state.handleLoading);

    useEffect(() => {
        loading(isPending);
        if(data?.authenticated && data?.user){
            setUser(data.user);
        }
        else if(!isPending && error){
            navigate("/login",{replace:true});
        }
    },[data,error,isPending]);

    if(data?.authenticated) return <Outlet/>;
}

export default ProtectedRoute;