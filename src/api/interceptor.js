import axios from "axios";

const baseURL = 'http://localhost:8080';

const instance = axios.create({baseURL});

instance.interceptors.request.use(
    (config) => {
        config.meta = config.meta || {};
        config.meta.requestStartedAt = new Date().getTime();
        console.log("config: ", config);
        return config;
    },
    (error)=>{
        console.log("Error: ", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        response.duration = new Date().getTime() - response.config.meta.requestStartedAt;
        console.log("Response: ", response);
        console.log("Time taken(ms): ", response.duration);
        console.log("Response status: ", response.status)
        console.log("Request URL: ", response.config.url);
        return response;
    },
    (error)=>{
        console.log("Error: ", error);
        if (error.response && error.status === 404){
            window.location.href = "/404";
        }
        else if (error.response && error.status === 500){
            window.location.href = "/500";
        }
        return Promise.reject(error);
}
);

export default instance;
