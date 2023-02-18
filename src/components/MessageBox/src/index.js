import MessageBoxComponent from "./MessageBox.vue";
import { createApp, watch } from "vue";
export const fields = ["confirm", "prompt"];
const MessageBox = options => {
	const messageBoxApp = createApp(MessageBoxComponent, options);
	return new Promise((resolve, reject) => {
		showMessageBox(messageBoxApp, { resolve, reject });
	});
};
fields.forEach(field => {
	MessageBox[field] = options => {
		options.field = field;
		return MessageBox(options);
	};
});
const showMessageBox = (app, { resolve, reject }) => {
	const oFragment = document.createDocumentFragment();
	const vm = app.mount(oFragment);
	document.body.appendChild(oFragment);
	vm.setVisible(true);

	watch(vm.state, state => {
		if (!state.visible) {
			switch (state.type) {
				case "cancel":
					reject();
					break;
				case "confirm":
					resolve(state.promptValue);
					break;
				default:
					break;
			}
			hideMessageBox(app);
		}
	});
};

const hideMessageBox = app => {
	app.unmount();
};

export default MessageBox;
