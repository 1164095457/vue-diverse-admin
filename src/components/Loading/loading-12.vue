<template>
	<div class="loader"></div>
</template>
<style scoped>
.loader {
	border-top: 8px solid hotpink;
	border-bottom: 8px solid #f55951;
	border-left: 8px solid #3a9efd;
	border-right: 8px solid #1fff7c;
	border-radius: 100%;
	height: 80px;
	width: 80px;
	animation: looper 5s infinite ease-in-out;
}

@keyframes looper {
	0% {
		border-radius: 100% 100% 100% 100%;
		border-color: hotpink #3a9efd #1fff7c #f55951;
	}

	10% {
		border-radius: 0% 100% 0% 0%;
		border-color: #f55951;
		transform: rotate(150deg);
	}

	20% {
		border-radius: 0% 0% 0% 0%;
		border-color: #3a9efd;
	}

	30% {
		border-radius: 0% 0% 0% 0%;
		border-color: #1fff7c;
	}

	40% {
		border-radius: 0% 0% 0% 0%;
		border-color: #3a9efd;
	}

	50% {
		border-radius: 100%;
		border-color: #f55951;
	}

	90% {
		border-radius: 100%;
		transform: rotate(360deg);
		border-style: dashed;
	}

	100% {
		transform: rotate(0deg);
		border-radius: 100% 100% 100% 100%;
		border-color: hotpink #3a9efd #1fff7c #f55951;
	}
}
</style>
