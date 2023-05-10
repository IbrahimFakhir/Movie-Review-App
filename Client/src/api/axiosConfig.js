import axios from "axios";

export default axios.create({
    baseURL:'https://3357-2003-c2-f725-6960-1d68-fdb0-37bb-3567.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})
