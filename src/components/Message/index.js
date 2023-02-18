import types from "./src/types";
import MessageComponent from "./src/Message.vue";
import { createApp, ref, watch } from "vue";

const Message = options => {
	const messageApp = createApp(MessageComponent, options);
	showMessage(messageApp, options.duration);
};

Object.values(types).forEach(type => {
	Message[type] = options => {
		options.type = type;
		return Message(options);
	};
});

const messageArr = ref([]);

function showMessage(app, duration) {
	const oFrag = document.createDocumentFragment();
	const vm = app.mount(oFrag);
	messageArr.value.push(vm);
	document.body.appendChild(oFrag);
	setTop(vm);
	vm.setVisible(true);
	watch(messageArr, () => {
		setTop(vm);
	});
	hideMessage(app, vm, duration);
}

function hideMessage(app, vm, duration) {
	vm.time = setTimeout(async () => {
		await vm.setVisible(false);
		app.unmount();
		messageArr.value = messageArr.value.filter(item => item !== vm);
		clearTimeout(vm.time);
		vm.time = null;
	}, duration || 2000);
}

function setTop(vm) {
	const { setTop, height, margin } = vm;
	const currentIndex = messageArr.value.findIndex(item => item === vm);
	setTop(margin * (currentIndex + 1) + height * currentIndex);
}

export default Message;
