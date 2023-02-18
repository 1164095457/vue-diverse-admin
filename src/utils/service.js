import axios from "axios";
// let devUrl = import.meta.env.VITE_BASE_URL;
// let prodUrl = import.meta.env.VITE_GLOB_BASE_URL;
const service = axios.create({
	baseURL: "",
	timeout: 5000
});
service.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		console.log(error);
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	res => {
		return res;
	},
	error => {
		return Promise.reject(error);
	}
);

export default service;
