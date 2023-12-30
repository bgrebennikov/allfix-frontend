import axios from "axios"


const client = axios.create(
    {
        // baseURL: "https://xn----7sbeejdbbb9ch4clo.xn--p1ai",
        baseURL: "http://localhost:8080",
        headers: {
            "Access-Control-Allow-Origin" : "xn----7sbeejdbbb9ch4clo.xn--p1ai",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
)

client.interceptors.request.use(
    config => {
        const access_token = localStorage.getItem("access_token")
        if(access_token){
            config.headers["Authorization"] = `Bearer ${access_token}`
        }

        return config

    },
    error => Promise.reject(error)
)

export {client};