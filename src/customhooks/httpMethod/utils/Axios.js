import axios from "axios";
const Axios = axios.create({
    baseURL: 'http://localhost:3001/nomad/blog'
});
export default Axios;