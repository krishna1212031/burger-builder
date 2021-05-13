import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burgers-fd830-default-rtdb.firebaseio.com/" 
});

export default instance;
