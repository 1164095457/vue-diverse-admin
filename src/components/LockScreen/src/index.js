import LockScreenComponent from "./LockScreen.vue";
import { createApp, watch } from "vue";
const LockScreen = options => {
	const LockScreenApp = createApp(LockScreenComponent, options);
	showLockScreen(LockScreenApp);
};
const showLockScreen = app => {
	const oFragment = document.createDocumentFragment();
	const vm = app.mount(oFragment);
	document.body.appendChild(oFragment);
	vm.setVisible(true);
	watch(vm.state, state => {
		if (!state.visible) {
			hideMessageBox(app);
		}
	});
};
const hideMessageBox = app => {
	app.unmount();
};
export default LockScreen;
