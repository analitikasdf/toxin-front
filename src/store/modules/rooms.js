import axios from 'axios'

export default {
	state: {
		roomsList: [],
		noRes: false
	},
	mutations: {
		setRooms(state, item) {

			
			state.noRes = false
			state.roomsList = item
			state.roomsList.map(item => {
				let validKeys = [ 'Number', 'Lux', 'Price', 'Stars' ]
				Object.keys(item).forEach((key) => validKeys.includes(key) || delete item[key])
			})
		},
		noResultat(state) {
			state.roomsList = []
			state.noRes = true
		},
		clearState(state) {
			state.roomsList = []
		}
	},
	
	actions: {
		roomsLoad({commit,}, {min, max, guests, lux}) {
			axios.get(`${process.env.VUE_APP_URL}/rooms?Price_gte=${min}&Price_lte=${max}&Guests_gte=${guests}${lux ? `&Lux=${lux}` : ""}`, {
			})
			.then(response => {
				// Handle success.
				console.log(response.data);
				if(response.data.length === 0) {
					commit('noResultat')
				} else commit('setRooms', response.data)
			})
			.catch(error => {
				// Handle error.
				console.log('An error occurred:', error.response);
			});
		}
	},
	getters: {		
	}
}