import { defineStore } from "pinia";
// KeepAliveStore
export const KeepAliveStore = defineStore({
	id: "keepAliveStore",
	state: () => ({
		// 当前缓存的 routerName
		keepLiveName: ["test"]
	}),
	getters: {},
	actions: {
		// addKeepLiveName
		async addKeepLiveName(name) {
			!this.keepLiveName.includes(name) && this.keepLiveName.push(name);
		},
		// removeKeepLiveName
		async removeKeepLiveName(name) {
			this.keepLiveName = this.keepLiveName.filter(item => item !== name);
		},
		// clearMultipleKeepAlive
		async clearMultipleKeepAlive(keepLiveName = []) {
			this.keepLiveName = keepLiveName;
		}
	}
});
