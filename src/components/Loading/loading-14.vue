<template>
	<div class="loader">
		<div class="box-1"></div>
		<span>Loading</span>
	</div>
</template>
<style scoped>
.loader {
	position: relative;
}

.box-1 {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 120px;
	width: 120px;
	background-color: #ffffff;
	background-image: linear-gradient(135deg, #ffffff 0%, #6284ff 34%, #ff0000 100%);
	border-radius: 50%;
	animation: rotate 3s linear infinite;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.box-1::before {
	content: "";
	position: absolute;
	inset: 15px;
	background: #f5f5f5;
	border-radius: 50%;
	box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.loader span {
	text-align: center;
	position: absolute;
	top: 65px;
	left: 30px;
	color: black;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	letter-spacing: 2px;
	font-weight: 800;
	font-size: 12px;
	animation: text-animate412 3s linear infinite;
}

@keyframes text-animate412 {
	10% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>
