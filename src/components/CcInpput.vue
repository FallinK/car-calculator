<template>
	<div class="input" :class="{input_disabled: isSending}">
		<h2 class="input__title">
			<slot name="input-title" tag="p"/>
		</h2>
		<div class="input__body">
			<input
				type="tel"
				v-if="input.type !== '%'"
				class="input__text"
				v-model.lazy="localValue"
				@input="maskInput"
				@keydown="preventEnter"
				:disabled=isSending
				pattern=""
			>
			<div class="input__text" v-else-if="input.type === '%'" ref="inputText" @click="$refs.percentInput.focus">
				<span>{{initialFee}}</span><span class="input__text_percent"> ₽</span>
				<input
					type="tel"
					class="input__percent"
					v-model.lazy="localValue"
					@keydown="preventEnter"
					@focus="toggleActive"
					@blur="toggleActive"
					:disabled=isSending
					ref="percentInput"
				>
			</div>
			<input
				class="input__slider"
				type="range"
				:min="input.min"
				:max="input.max"
				v-model="valueSlider"
				:disabled=isSending
				:class="{input__slider_disabled: isSending}"
			>
			<div class="input__type" :class="{input__type_small: input.type === '%'}">{{input.type}}</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
	props: {
		input: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			localValue: 0,
			valueSlider: 0
		}
	},
	methods: {
		maskInput(event) {
			let tmpStr = this.formatToNumber(event.target.value);
			event.target.value = tmpStr.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
		},
		...mapMutations({
			setInputs: 'calculator/setInputs',
			setResults: 'calculator/setResults'
		}),
		...mapActions({
			considerResult: 'calculator/considerResult'
		}),
		preventEnter(event) {
			if(event.keyCode == 13) {
          event.preventDefault();
			}
		},
		toggleActive() {
			this.$refs.inputText.classList.toggle("input__text_active");
		},
		formatToString(value){
			return value.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
		},
		formatToNumber(value){
			return Number(value.replace(/\s/g, ''));
		},
		updateInputs(newValue) {
			let newInputs = this.inputs;
			this.inputs.forEach((item,index) => {
				if(item.type === this.input.type) {
					if(newValue < this.input.min) {
						this.localValue = newValue = this.input.min;
					}
					else if (newValue > this.input.max) {
						this.localValue = newValue = this.input.max;
					}
					newInputs[index].value = newValue;
					if (item.result != undefined) {
						newInputs[index].result = this.formatToNumber(this.initialFee);
					}
					this.localValue = this.formatToString(this.localValue);
					this.setInputs(newInputs);
					this.considerResult();
				}
			});
		}
	},
	mounted() {
		this.localValue = this.formatToString(this.input.value);
		this.valueSlider = this.input.value;
	},
	computed: {
		...mapState({
			inputs: state => state.calculator.inputs,
			results: state => state.calculator.results,
			isSending: state => state.calculator.isSending
		}),
		...mapGetters({
			monthlyPayment: 'calculator/monthlyPayment',
			leasingAmount: 'calculator/leasingAmount',
		}),
		initialFee() {
			return this.formatToString(Math.round(this.inputs[0].value * (this.input.value / 100)));
		}

	},
	watch: {
		localValue(newValue) {
			this.updateInputs(this.formatToNumber(newValue));
			this.valueSlider = this.formatToNumber(this.localValue);
		},
		valueSlider(newValue) {
			this.localValue = this.formatToString(newValue);
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.input {
	flex: 50%;
	margin: 32px 0 0 0;
		&_disabled {
			opacity: 0.4;
		}
		&__title {
			font-family: Gilroy;
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			color: #575757;
		}
		&__body {
			position: relative;
			width: 100%;
			margin: 24px 0 0 0;
		}
		&__text {
			background: #F3F3F4;
			border-radius: 16px;
			width: 100%;
			color: #575757;
			font-family: Nekst;
			font-weight: 900;
			font-size: 30px;
			padding: 19px 0 19px 24px;
			&:focus {
				outline: 2px solid #F3F3F4;
				background: none;
			}
			&_active {
				outline: 2px solid #F3F3F4;
				background: none;
			}
			&_percent {
				position: relative;
				top: -2px;
			}
		}
		&__type {
			position: absolute;
			top: 50%;
			right: 0;
			color: #575757;
			font-family: Nekst;
			font-weight: 900;
			font-size: 30px;
			transform: translate(-24px, -50%);
			&_small {
				font-size: 20px;
			}
		}
		&__percent {
			position: absolute;
			top: 10%;
			right: 0;
			width: 69px;
			font-size: 20px;
			transform: translate(-10px, 0);
			padding: 15px 17px;
			background: #EBEBEC;
			color: #575757;
			border-radius: 16px;
		}
		&__slider {
			--max: v-bind(input.max);
			--min: v-bind(input.min);
			--value: v-bind(input.value);
			--range: calc(var(--max) - var(--min));
			--ratio: calc((var(--value) - var(--min)) / var(--range));
			--sx: calc(0.5 * 16px + var(--ratio) * (100% - 16px));
			-webkit-appearance: none;
			height: 2px;
			position: absolute;
			bottom: 0px;
			left: 24px;
			width: calc(100% - 48px);
			background: linear-gradient(#FF9514,#FF9514) 0/var(--sx) 100% no-repeat, #efefef;
			cursor: pointer;
			&_disabled {
				cursor: auto;
			}
			&::-webkit-progress-inner-element{
				background: #FF9514;
			}
			&::-webkit-slider-thumb {
				-webkit-appearance: none;
				width: 16px;
				height: 16px;
				border-radius: 20px;
				background: #FF9514;
				margin: -7px 0 0 0;
			}
			&::-moz-range-thumb{
				-webkit-appearance: none;
				width: 16px;
				height: 16px;
				border-radius: 20px;
				background: #FF9514;
			}
			&::-webkit-slider-runnable-track{
				height: 2px;
			}
			&::-moz-range-progress{
				background: #FF9514;
				height: 4px;
			}
			&::-webkit-progress-value{
				background: #FF9514;
			}
		}
}
@media (max-width: $bp-medium) {
	.input {
		&__title {
			color: #333E48;
			font-size: 14px;
		}
		&__text {
			color: #333E48;
			font-size: 22px;
		}
		&__type {
			color: #333E48;
			font-size: 22px;
		}
		&__percent {
			font-size: 22px;
			transform: translate(-10px, -3px);
			padding: 14px;
		}
	}
}
@media (max-width: $bp-xsmall) {
	.input {
		&__title {
			font-size: 0.45rem;
		}
		&__text {
			font-size: 0.7rem;
			&_percent {
				top: -0.1vh;
			}
		}
		&__type {
			font-size: 0.7rem;
		}
		&__percent {
			font-size: 0.7rem;
			width: 23vw;
			transform: translate(-15px, -3px);
			padding: auto 5px;
		}
	}
}
</style>