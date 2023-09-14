import service from "@/utils/service.js";

export const routerList = () => {
	return service({
		method: "GET",
		url: "/api/router/list"
	});
};

export const pageLogin = () => {
	return service({
		method: "GET",
		url: "/api/login"
	});
};

export const getAuthButton = () => {
	return service({
		method: "GET",
		url: "/api/auth/button"
	});
};
