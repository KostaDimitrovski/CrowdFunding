import axios from "axios";


const token = localStorage.getItem("JWT");
const instance = axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        "Content-type": "application/json",
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    }
});

instance.interceptors.request.use(
    config => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        if (error.response.status === 403) {
            localStorage.removeItem("JWT");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
