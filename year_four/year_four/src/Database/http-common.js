import axios from "axios";
export default axios.create({
    baseURL: "https://devweb2021.cis.strath.ac.uk/qhb18155-nodejs/api",
    headers: {
        "Content-type": "application/json"
    }
});