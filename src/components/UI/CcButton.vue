<template>
	<button class="button-ui">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'cc-button',
}
</script>

<style lang="scss">
.button-ui {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 426px;
	height: 68px;
	background: #FF9514;
	border-radius: 40px;
	color: #ffff;
	font-family: Nekst;
	font-weight: 900;
	font-size: 30px;
	transition: 0.3s ease 0s;
	cursor: pointer;
	&:hover {
		transform: scaleX(0.95);
		background: #111111;
	}
	&:active {
		transform: scaleX(1);
		background: #575757;
	}
}
@media (max-width: 1439.98px) {
	.button-ui {
		width: 345px;
	}
}
@media (max-width: 767.98px) {
	.button-ui {
		width: 280px;
		font-size: 22px;
	}
}
</style>