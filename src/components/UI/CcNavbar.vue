<template>
	<nav class="menu">
		<div class="menu__body">
			<ul class="menu__list">
				<li class="menu__item" @click="$router.push('/')">Disabled</li>
				<li class="menu__item" @click="$router.push('/loading')">Loading</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'cc-navbar'
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.menu {
	position: fixed;
	width: 100%;
	padding: 0 15px;
	font-family: Gilroy;
	font-weight: 400;
	font-size: 20px;
	z-index: 100;
		&__list {
			height: 60px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: 10px;
		}
		&__item {
			color: #fff;
			transition: 0.3s ease 0s;
			height: 48px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 12px 24px;
			background: #FF9514;
			border-radius: 20px;
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
}
@media (max-width: $bp-medium) {
	.menu {
		&__list {
			height: 60px;
		}
	}
}
@media (max-width: $bp-xsmall) {
	.menu {
		font-size: 0.66rem;
		&__list {
			gap: 1%;
		}
		&__item {
			padding: 0 9.2%;
		}
	}
}
</style>