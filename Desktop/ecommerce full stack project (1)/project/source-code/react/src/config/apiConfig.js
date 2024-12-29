import axios from "axios"

export const API_BASE_URL="http://localhost:5454"

const jwt=localStorage.getItem("jwt")

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
}) 

// import axios from "axios";

// export const API_BASE_URL = "http://localhost:5454";

// const jwt = localStorage.getItem("jwt");

// const headers = {
//     'Content-Type': "application/json"
// };

// if (jwt) {
//     headers.Authorization = `Bearer ${jwt}`;
//     console.log("apiConfig jwt" ,jwt);
// }

// export const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers
// });