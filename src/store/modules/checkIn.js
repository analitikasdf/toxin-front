import axios from 'axios'

export default {
	state: {
		user: {}
	},
	mutations: {
		setUser(state, item) {
			state.user = item
		}
	},
	actions: {
		createNewUser({commit}, {name, email, password}) {
			axios.post('http://localhost:1337/auth/local/register', {
				username: name,
				email: email,
				password: password,
			})
			.then(response => {
				// Handle success.
				console.log('Well done!');
				console.log('User profile', response.data.user);
				console.log('User token', response.data.jwt);
				commit('setUser', response.data.user)
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