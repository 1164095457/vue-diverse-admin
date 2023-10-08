<template>
	<div class="loading-container">
		<div class="loading-item"><i></i><i></i></div>
	</div>
	<!-- Container -->
</template>
<style scoped>
.loading-item {
	margin: 0 auto;
	height: 20px;
	width: 20px;
	position: relative;
	animation: spin 1.5s linear infinite;
	animation: spin 1.5s linear infinite;
}
.loading-item i {
	height: 20px;
	width: 20px;
	border-radius: 25px;
	display: block;
	position: absolute;
}

.loading-item i:before,
.loading-item i:after {
	content: "";
	display: block;
	position: absolute;
	height: inherit;
	width: inherit;
	border-radius: inherit;
}

.loading-item i:first-child:before {
	background: rgba(52, 149, 221, 0.9);
	animation: rotate-top-left 1.5s linear infinite;
	animation: rotate-top-left 1.5s linear infinite;
}

.loading-item i:first-child:after {
	background: rgba(225, 73, 44, 0.9);
	animation: rotate-top-right 1.5s linear infinite;
	animation: rotate-top-right 1.5s linear infinite;
}

.loading-item i:last-child:before {
	background: rgba(249, 206, 43, 0.9);
	animation: rotate-bottom-left 1.5s linear infinite;
	animation: rotate-bottom-left 1.5s linear infinite;
}

.loading-item i:last-child:after {
	background: rgba(0, 153, 117, 0.9);
	animation: rotate-bottom-right 1.5s linear infinite;
	animation: rotate-bottom-right 1.5s linear infinite;
}
.loading-text {
	text-align: center;
	margin-top: 30px;
	color: #fff;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 20% 20%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 80% 20%;
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes rotate-bottom-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 80% 80%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-bottom-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 20% 80%;
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 20% 20%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 80% 20%;
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes rotate-bottom-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 80% 80%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-bottom-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 20% 80%;
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
