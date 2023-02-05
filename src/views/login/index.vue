<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
					<h2 class="logo-text">{{APPNAME}}</h2>
				</div>
				<LoginForm />
			</div>
		</div>
		<div class="bruce">
			<ul class="bubble-bgwall">
				<li v-for="(item, index) in 15" :key="index">Hi</li>
			</ul>
		</div>
	</div>
</template>

<script setup name="login">
import LoginForm from "./components/LoginForm.vue";
import { APP_NAME } from "@/config/config";
const APPNAME = APP_NAME
</script>

<style scoped lang="scss">
.login-container {
	position: relative;
	min-width: 550px;
	height: 100%;
	min-height: 500px;
	background-color: #eeeeee;
	background-position: 50%;
	background-size: 100% 100%;
	background-size: cover;
	.bruce {
		overflow: hidden;
		position: absolute;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(270deg, #8146b4, #6990f6);

		.bubble-bgwall {
			li {
				display: flex;
				position: absolute;
				bottom: -200px;
				justify-content: center;
				align-items: center;
				border-radius: 10px;
				width: 50px;
				height: 50px;
				background-color: rgba(#fff, 0.15);
				color: #ccc;
				animation: bubble 15s infinite;
				&:nth-child(1) {
					left: 10%;
				}
				&:nth-child(2) {
					left: 20%;
					width: 90px;
					height: 90px;
					animation-duration: 7s;
					animation-delay: 2s;
				}
				&:nth-child(3) {
					left: 25%;
					animation-delay: 4s;
				}
				&:nth-child(4) {
					left: 40%;
					width: 60px;
					height: 60px;
					background-color: rgba(#fff, 0.3);
					animation-duration: 8s;
				}
				&:nth-child(5) {
					left: 70%;
				}
				&:nth-child(6) {
					left: 80%;
					width: 120px;
					height: 120px;
					background-color: rgba(#fff, 0.2);
					animation-delay: 3s;
				}
				&:nth-child(7) {
					left: 32%;
					width: 160px;
					height: 160px;
					animation-delay: 2s;
				}
				&:nth-child(8) {
					left: 55%;
					width: 40px;
					height: 40px;
					font-size: 12px;
					animation-duration: 15s;
					animation-delay: 4s;
				}
				&:nth-child(9) {
					left: 25%;
					width: 40px;
					height: 40px;
					background-color: rgba(#fff, 0.3);
					font-size: 12px;
					animation-duration: 12s;
					animation-delay: 2s;
				}
				&:nth-child(10) {
					left: 85%;
					width: 160px;
					height: 160px;
					animation-delay: 5s;
				}
			}
		}

		@keyframes bubble {
			0% {
				opacity: 0.5;
				transform: translateY(0) rotate(45deg);
			}
			25% {
				opacity: 0.75;
				transform: translateY(-400px) rotate(90deg);
			}
			50% {
				opacity: 1;
				transform: translateY(-600px) rotate(135deg);
			}
			100% {
				opacity: 0;
				transform: translateY(-1000px) rotate(180deg);
			}
		}
	}

	.dark {
		position: absolute;
		top: 4.5%;
		right: 3.2%;
	}
	.login-box {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 96%;
		height: 94%;
		padding: 0 50px;
		background-color: hsl(0deg 0% 100% / 80%);
		border-radius: 10px;
		.login-left {
			width: 800px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.login-form {
			width: 520px;
			padding: 100px 40px;
			border-radius: 10px;
			box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
			text-align: center;
			z-index: 2;
			background: rgba(255, 255, 255, 0.9);
			.login-logo {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 45px;
				.login-icon {
					width: 60px;
					height: 52px;
				}
				.logo-text {
					padding: 0 0 0 25px;
					margin: 0;
					font-size: 30px;
					font-weight: bold;
					color: #34495e;
					white-space: nowrap;
				}
			}
			.el-form-item {
				margin-bottom: 40px;
			}
			.login-btn {
				display: flex;
				justify-content: space-between;
				width: 100%;
				margin-top: 40px;
				white-space: nowrap;
				.el-button {
					width: 185px;
				}
			}
		}
	}
}
</style>
