import axios from 'axios'

export default {
    state: {
		loginUser: {}
	},
	mutations: {
		updateUser(state, item) {
			state.loginUser = item
			console.log(item, 'mutation');
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