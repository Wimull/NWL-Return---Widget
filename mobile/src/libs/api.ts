import axios from "axios";
export const api = axios.create({
	baseURL: "http://189.33.168.111:3001",
});
