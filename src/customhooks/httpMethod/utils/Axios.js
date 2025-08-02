import axios from "axios";
const Axios = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/nomad`
});
export default Axios;