<template>
	<figure class="loader">
		<div class="dot white"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</figure>
</template>
<style scoped>
.loader {
	width: 6.25em;
	height: 6.25em;
	animation: rotate5123 2.4s linear infinite;
}

.white {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: white;
	animation: flash 2.4s linear infinite;
	opacity: 0;
}

.dot {
	position: absolute;
	margin: auto;
	width: 2.4em;
	height: 2.4em;
	border-radius: 100%;
	transition: all 1s ease;
}

.dot:nth-child(2) {
	top: 0;
	bottom: 0;
	left: 0;
	background: #ff4444;
	animation: dotsY 2.4s linear infinite;
}

.dot:nth-child(3) {
	left: 0;
	right: 0;
	top: 0;
	background: #ffbb33;
	animation: dotsX 2.4s linear infinite;
}

.dot:nth-child(4) {
	top: 0;
	bottom: 0;
	right: 0;
	background: #99cc00;
	animation: dotsY 2.4s linear infinite;
}

.dot:nth-child(5) {
	left: 0;
	right: 0;
	bottom: 0;
	background: #33b5e5;
	animation: dotsX 2.4s linear infinite;
}

@keyframes rotate5123 {
	0% {
		transform: rotate(0);
	}

	10% {
		width: 6.25em;
		height: 6.25em;
	}

	66% {
		width: 2.4em;
		height: 2.4em;
	}

	100% {
		transform: rotate(360deg);
		width: 6.25em;
		height: 6.25em;
	}
}

@keyframes dotsY {
	66% {
		opacity: 0.1;
		width: 2.4em;
	}

	77% {
		opacity: 1;
		width: 0;
	}
}

@keyframes dotsX {
	66% {
		opacity: 0.1;
		height: 2.4em;
	}

	77% {
		opacity: 1;
		height: 0;
	}
}

@keyframes flash {
	33% {
		opacity: 0;
		border-radius: 0%;
	}

	55% {
		opacity: 0.6;
		border-radius: 100%;
	}

	66% {
		opacity: 0;
	}
}
</style>
