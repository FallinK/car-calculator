import axios from "axios";
export const calculatorModule = {
	state: () => ({
		inputs: [
			{title: 'Стоимость автомобиля',min: 1000000 ,max: 6000000, type: '₽', value: 1000000},
			{title: 'Первоначальный взнос',min: 10 ,max: 60, type: '%', value: 10, result: 0},
			{title: 'Срок лизинга',min: 1 ,max: 60, type: 'мес.', value: 1},
		],
		results: [],
		isSending: false,
	}),
	mutations: {
		setInputs(state, inputs) {
			state.inputs = inputs;
		},
		setResults(state, results) {
			state.results = results;
		},
		setBoolSending(state, isSending){
			state.isSending = isSending;
		}
	},
	getters: {
		monthlyPayment(state) {
			return {
				title: 'Ежемесячный платеж от',
				type: 'monthlyPayment',
				value: Math.round((state.inputs[0].value - state.inputs[1].result) * ((0.035 * Math.pow((1 + 0.035), state.inputs[2].value)) / (Math.pow((1 + 0.035), state.inputs[2].value) - 1)))
			}
		},
		leasingAmount(state, getters){
			return {
				title: 'Сумма договора лизинга',
				type: 'leasingAmount',
				value: state.inputs[1].result + state.inputs[2].value * getters.monthlyPayment.value
			}
		}
	},
	actions: {
		considerResult({getters, commit}) {
			commit('setResults', [getters.leasingAmount, getters.monthlyPayment]);
		},
		async sendData({state, getters}){
			console.log(state.isSending);
			const url = "https://eoj3r7f3r4ef6v4.m.pipedream.net";
			const data = JSON.stringify({
				price: state.inputs[0].value,
				initial: state.inputs[1].result,
				months: state.inputs[2].value,
				monthPay: getters.monthlyPayment.value,
				leasingAmount: getters.leasingAmount.value
			});
			try {
				const response = await axios.post(url, data, {
					headers: {
						'Content-Type': 'application/json'
					},
				});
				// const response = await fetch(url, {
				// 	method: 'POST',
				// 	body: JSON.stringify(data),
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	}
				// });
				const json = await response.status;
				console.log(json);
				state.isSending = await false;
				console.log(state.isSending);
			}
			catch(error) {
				console.log(error);
				state.isSending = false;
				console.log(state.isSending);
			}
		}
	},
	namespaced: true
}