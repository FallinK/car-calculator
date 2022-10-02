<template>
	<section class="calculator">
		<div class="calculator__container">
			<h1 class="calculator__title">
				Рассчитайте стоимость автомобиля в лизинг
			</h1>
			<div class="calculator__inputs">
				<cc-input
					v-for="input in inputs"
					:key="input.type"
					:input="input"
				>
					<template v-slot:input-title>{{input.title}}</template>
				</cc-input>
			</div>
			<div class="calculator__results">
				<cc-result :result="result" v-for="result in results" :key="result.type"></cc-result>
				<div class="calculator__submit">
					<cc-button @click="submitCalc" v-if="isSending" disabled :class="{'calculator__submit_disabled': isSending}"><img src="@/assets/images/button/loading.svg" alt="Loading"></cc-button>
					<cc-button @click="submitCalc" v-else >Оставить заявку</cc-button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import CcInput from '@/components/CcInpput.vue';
import CcResult from '@/components/CcResult.vue';
import {mapActions, mapMutations, mapState} from 'vuex';
import CcButton from '@/components/UI/CcButton.vue';
export default {
	components: {CcInput, CcResult, CcButton},
	computed: {
		...mapState({
			inputs: state => state.calculator.inputs,
			results: state => state.calculator.results,
			isSending: state => state.calculator.isSending
		}),
	},
	methods: {
		submitCalc() {
			this.setBoolSending(true);
			this.sendData();
		},
		...mapMutations({
			setBoolSending: 'calculator/setBoolSending'
		}),
		...mapActions({
			sendData: 'calculator/sendData'
		}),
	}
}
</script>

<style lang="scss">
.calculator {
	display: flex;
	align-items: center;
	flex: 1 1 auto;
	margin: 60px 0 0 0;
	height: 100%;
	width: 100%;
		&__container {
			flex: 100%;
		}
		&__title {
			max-width: 753px;
			font-size: 54px;
			line-height: 90%;
		}
		&__inputs {
			display: flex;
			gap: 32px;
		}
		&__results {
			margin: 44px 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__submit {
			& img {
				width: 30px;
				animation: 1s infinite loading;
			}
			&_disabled {
				cursor: wait;
				&:hover {
						transform: none;
						background: #FF9514;
				}
			}
		}
}
@keyframes loading {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
@media (max-width: 1439.98px) {
	.calculator {
		&__inputs {
			margin: 12px 0 0 0;
			flex-direction: column;
		}
		&__results {
			margin: 37px 0;
			justify-content: flex-start;
			& .result {
				flex: 33%;
			}
		}
	}
}
@media (max-width: 767.98px) {
	.calculator {
		&__title {
			font-size: 34px;
		}
		&__inputs {
			margin: auto;
		}
	}
}
</style>