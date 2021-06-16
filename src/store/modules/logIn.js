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
		localStorage(state, item) {
			state.loginUser = item
		}
	},
	actions: {
		logInUser({commit}, { email, password }) {
			axios
			.post('http://localhost:1337/auth/local', {
				identifier: email,
				password: password,
			})
			.then(response => {
				// Handle success.
				console.log('Well done!');
				console.log('User profile', response.data.user);
				console.log('User token', response.data.jwt);
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