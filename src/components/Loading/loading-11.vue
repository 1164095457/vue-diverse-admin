<template>
	<div class="loader">
		<div class="loader-cube">
			<div class="face"></div>
			<div class="face"></div>
			<div class="face"></div>
			<div class="face"></div>
			<div class="face"></div>
			<div class="face"></div>
		</div>
	</div>
</template>
<style scoped>
.loader {
	perspective: 800px;
}

.loader-cube {
	width: 80px;
	height: 80px;
	position: relative;
	transform-style: preserve-3d;
	transform-origin: 50% 50%;
	animation: rotate 4s infinite linear;
}

.loader-cube:before,
.loader-cube:after {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: transparent;
}

.loader-cube:before {
	transform: rotateX(90deg) translateZ(40px);
}

.loader-cube:after {
	transform: rotateY(90deg) translateZ(40px);
}

.loader-cube .face {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgb(252, 248, 248);
	opacity: 0.8;
	border: 2px solid rgb(252, 250, 250);
}

.loader-cube .face:nth-child(1) {
	transform: rotateY(0deg) translateZ(40px);
	background-color: #e74c3c;
}

.loader-cube .face:nth-child(2) {
	transform: rotateX(90deg) translateZ(40px);
	background-color: #3498db;
}

.loader-cube .face:nth-child(3) {
	transform: rotateY(180deg) translateZ(40px);
	background-color: #2ecc71;
}

.loader-cube .face:nth-child(4) {
	transform: rotateX(-90deg) translateZ(40px);
	background-color: #f1c40f;
}

.loader-cube .face:nth-child(5) {
	transform: rotateY(90deg) translateZ(40px);
	background-color: #9b59b6;
}

.loader-cube .face:nth-child(6) {
	transform: rotateY(0deg) translateZ(-40px);
	background-color: #1abc9c;
}

@keyframes rotate {
	0% {
		transform: rotateY(0deg) rotateX(0deg);
	}

	100% {
		transform: rotateY(1turn) rotateX(1turn);
	}
}
</style>
