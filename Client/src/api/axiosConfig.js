import axios from "axios";

export default axios.create({
    baseURL:'https://e5d8-2003-c2-f725-6960-80b6-9282-1bf2-dee0.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})
