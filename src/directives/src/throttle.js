const throttle = {
	mounted(el, binding) {
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		let timer = null;
		el.__handleClick__ = function () {
			if (timer) {
				clearTimeout(timer);
			}
			if (!el.disabled) {
				el.disabled = true;
				binding.value();
				timer = setTimeout(() => {
					el.disabled = false;
				}, 500);
			}
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default throttle;
