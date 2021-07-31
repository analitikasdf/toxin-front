import axios from 'axios'

export default {
    state: {
		loginUser: {},
		loginUserError: {},
	},
	mutations: {
		updateUser(state, item) {
			state.loginUser = item
		},
		updateUserError(state, item) {
			state.loginUserError = item
		},
		clearError(state) {
			state.loginUserError = {}
			console.log('delete error')
		},
		localStorage(state, item) {
			state.loginUser = item
		},
		logOut(state) {
			state.loginUser = {}
			localStorage.setItem('user', null)
		}
	},
	actions: {
		logInUser({commit}, { email, password }) {
			axios
			.post(`${process.env.VUE_APP_URL}/auth/local`, {
				identifier: email,
				password: password,
			})
			.then(response => {
				// Handle success.
				console.log('Well done!');
				console.log('User profile', response.data.user);
				console.log('User token', response.data.jwt);
				console.log('Status', response.status);
				commit('updateUser',  response.data.user)
				localStorage.setItem('user', JSON.stringify(response.data.user))
			})
			.catch(error => {
				// Handle error.
				console.log('An error occurred:', error.response);
				commit('updateUserError', error.response)
			});
			
		}
	},
	getters: {
		
	}
}