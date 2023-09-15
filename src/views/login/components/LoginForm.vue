<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：随便填">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" v-model="loginForm.password" placeholder="密码：随便填" show-password autocomplete="new-password">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button @click="login(loginFormRef)" size="large" type="primary" :loading="loading"> 登录 </el-button>
		<el-button @click="resetForm(loginFormRef)" size="large">重置</el-button>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { GlobalStore } from "@/stores";
import { TabsStore } from "@/stores/modules/tabs";
import { HOME_URL } from "@/config/config";
import { pageLogin } from "@/api/login";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { KeepAliveStore } from "@/stores/modules/keepAlive";

const router = useRouter();
const tabsStore = TabsStore();
const globalStore = GlobalStore();
const keepAlive = KeepAliveStore();

// 定义 formRef（校验规则）
const loginFormRef = ref();
const loginRules = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive({ username: "", password: "" });
const login = formEl => {
	if (!formEl) return;
	formEl.validate(async valid => {
		if (!valid) return;
		loading.value = true;
		try {
			const { data } = await pageLogin();
			globalStore.setToken(data.token);
			await initDynamicRouter();
			tabsStore.closeMultipleTab();
			keepAlive.setKeepAliveName();
			router.push(HOME_URL);
			ElNotification({
				title: data.name,
				message: "欢迎登录 vue-diverse-admin",
				type: "success",
				duration: 3000
			});
		} finally {
			loading.value = false;
		}
	});
};

// resetForm
const resetForm = formEl => {
	if (!formEl) return;
	formEl.resetFields();
};
</script>

<style scoped lang="scss"></style>
