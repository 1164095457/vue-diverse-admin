export function is(val, type) {
	return toString.call(val) === `[object ${type}]`;
}

export function isNumber(val) {
	return is(val, "Number");
}
