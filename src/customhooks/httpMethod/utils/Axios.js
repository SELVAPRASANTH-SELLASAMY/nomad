import axios from "axios";
const Axios = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/nomad`
});
export default Axios;