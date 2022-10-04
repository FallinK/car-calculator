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
			const url = "https://hookb.in/eK160jgYJ6UlaRPldJ1P";
			const data = JSON.stringify({
				car_coast: state.inputs[0].value,
				initail_payment: state.inputs[1].result,
				initial_percent: state.inputs[1].value,
				lease_term: state.inputs[2].value,
				monthly_payment_from: getters.monthlyPayment.value,
				total_sum: getters.leasingAmount.value,
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
				const json = await response;
				console.log(json.status);
				state.isSending = await false;
			}
			catch(error) {
				console.log(error);
				state.isSending = false;
			}
		}
	},
	namespaced: true
}