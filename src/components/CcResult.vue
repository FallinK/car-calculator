<template>
	<div class="result">
		<h2 class="result__title">{{result.title}}</h2>
		<div class="result__value">{{value}} ₽</div>
	</div>
</template>

<script>
export default {
	props: {
		result: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			value: 0
		}
	},
	methods: {
		maskText(value) {
			return(value.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " "));
		},
	},
	mounted() {
		this.value = this.maskText(this.result.value);
	},
	watch: {
		result(newResult) {
			this.value = this.maskText(newResult.value);
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
	.result {
		&__title {
			font-family: 'Gilroy';
			font-weight: 400;
			font-size: 16px;
			color: #575757;
		}
		&__value {
			margin: 8px;
			font-size: 54px;
			color: #575757;
			line-height: 90%;
		}
}
@media (max-width: $bp-medium) {
	.result {
		min-width: 167px;
		&__title {
			font-size: 14px;
			color: #333E48;
		}
		&__value {
			margin: 2px 0 0 0;
			font-size: 22px;
			color: #333E48;
		}
	}
}
@media (max-width: $bp-xsmall) {
	.result {
		min-width: 100%;
	}
}
</style>