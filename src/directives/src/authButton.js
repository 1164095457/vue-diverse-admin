import { AuthStore } from "@/stores/modules/auth";

const authButton = {
	mounted(el, binding) {
		const { value } = binding;
		const authStore = AuthStore();
		const currentPageRoles = authStore.authButtonListGet[authStore.routeName] || [];
		if (value instanceof Array && value.length) {
			const hasPermission = value.every(item => currentPageRoles.includes(item));
			if (!hasPermission) el.remove();
		} else {
			if (!currentPageRoles.includes(value)) el.remove();
		}
	}
};

export default authButton;
