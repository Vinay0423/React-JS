//npm i json-server
//npm i axios
//npx json-server --watch db.json --port 3003


import axios from "axios";

let axiosInstance= axios.create({
    baseURL:'http://localhost:3030'
})

export default axiosInstance