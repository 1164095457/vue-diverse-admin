/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 */
export const localGet = key => {
	const value = window.localStorage.getItem(key);
	try {
		return JSON.parse(window.localStorage.getItem(key));
	} catch (error) {
		return value;
	}
};

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 */
export const localSet = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 */
export const localRemove = key => {
	window.localStorage.removeItem(key);
};

/**
 * @description 清除所有localStorage
 */
export const localClear = () => {
	window.localStorage.clear();
};

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 */
export const isType = val => {
	if (val === null) return "null";
	if (typeof val !== "object") return typeof val;
	else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
};

/**
 * @description 获取当前时间对应的提示语
 */
export const getTimeState = () => {
	const now = new Date();
	const hour = now.getHours();
	if (hour >= 5 && hour < 12) {
		return `早上好 ⛅`;
	}
	if (hour >= 12 && hour < 18) {
		return `🌞下午好`;
	}
	if (hour >= 18 && hour < 24) {
		return `晚上好 🌛`;
	}
	console.log(hour);
	return `凌晨好 🌛`;
};

/**
 * @description 获取当前时间
 */
export const getTime = type => {
	let myDate = new Date();
	let myYear = myDate.getFullYear();
	let myMonth = myDate.getMonth() + 1;
	let myToday = myDate.getDate();
	let myDay = myDate.getDay();
	let myHour = myDate.getHours();
	let myMinute = myDate.getMinutes();
	let mySecond = myDate.getSeconds();
	let week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	let nowTime;
	if (type === 1) {
		nowTime = myYear + "年" + fillZero(myMonth) + "月" + fillZero(myToday) + "日";
	} else if (type === 2) {
		nowTime = fillZero(myHour) + ":" + fillZero(myMinute) + ":" + fillZero(mySecond);
	} else if (type === 3) {
		nowTime = week[myDay];
	} else {
		nowTime =
			myYear +
			"年" +
			fillZero(myMonth) +
			"月" +
			fillZero(myToday) +
			"日" +
			" " +
			week[myDay] +
			" " +
			fillZero(myHour) +
			":" +
			fillZero(myMinute) +
			":" +
			fillZero(mySecond) +
			" " +
			"";
	}
	function fillZero(str) {
		let realNum;
		if (str < 10) {
			realNum = "0" + str;
		} else {
			realNum = str;
		}
		return realNum;
	}
	return nowTime;
};

/**
 * @description 获取浏览器默认语言
 */
export const getBrowserLang = () => {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = "";
	if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
		defaultBrowserLang = "zh";
	} else {
		defaultBrowserLang = "en";
	}
	return defaultBrowserLang;
};

/**
 * @description 扁平化数组对象(主要用来处理路由菜单)
 * @param {Array} menuList 所有菜单列表
 */
export const getFlatArr = menuList => {
	let newMenuList = JSON.parse(JSON.stringify(menuList));
	return newMenuList.reduce((pre, current) => {
		let flatArr = [...pre, current];
		if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
		return flatArr;
	}, []);
};

/**
 * @description 使用递归，过滤出需要渲染在左侧菜单的列表（剔除 isHide == true 的菜单）
 * @param {Array} menuList 所有菜单列表
 * */
export const getShowMenuList = menuList => {
	let newMenuList = JSON.parse(JSON.stringify(menuList));
	return newMenuList.filter(item => {
		item.children?.length && (item.children = getShowMenuList(item.children));
		return !item.meta?.isHide;
	});
};

/**
 * @description 递归找出所有面包屑存储到 pinia/vuex 中
 * @param {Array} menuList 所有菜单列表
 * @param {Object} result 输出的结果
 * @param {String} path 当前递归的路径
 */
export const getAllBreadcrumbList = (menuList, result = { key: "" }, path = []) => {
	for (const item of menuList) {
		result[item.path] = [...path, item];
		if (item.children) getAllBreadcrumbList(item.children, result, result[item.path]);
	}
	return result;
};

/**
 * @description 递把文件按照二进制方式读取
 * @param {File} file 文件源
 */
export const readFile = file => {
	return new Promise(resolve => {
		let reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = ev => {
			resolve(ev.target.result);
		};
	});
};

/**
 * @description 列表生成树状结构
 * @param {Array} items 列表
 * @param {String} parentId 父id
 * @return array
 */
export function generateTree(items, parentId = null) {
	let result = [];
	for (let item of items) {
		if (item.parentId === parentId) {
			let children = generateTree(items, item.id);
			if (children.length) {
				item.children = children;
			}
			result.push(item);
		}
	}
	return result;
}

/**
 * @description 权限控制渲染菜单
 * @param {Array} items 列表
 * @return array
 */
export const setAuthMenuList = items => {
	const arr = [];
	const authRouter = JSON.parse(localStorage.getItem("router")) || [];
	if (authRouter.length > 0) {
		const list = getFlatArr(items);
		authRouter.forEach(e1 => {
			list.forEach(e2 => {
				e2.children = [];
				if (e1 === e2.id) {
					arr.push(e2);
				}
			});
		});
		return generateTree(arr);
	} else {
		return items;
	}
};
