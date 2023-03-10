import { ElMessage } from "element-plus";
const copy = {
	mounted(el, binding) {
		el.copyData = binding.value;
		el.addEventListener("click", handleClick);
	},
	updated(el, binding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

function handleClick() {
	const input = document.createElement("input");
	input.value = this.copyData.toLocaleString();
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	ElMessage({
		message: "ε€εΆζε",
		type: "success"
	});
}

export default copy;
