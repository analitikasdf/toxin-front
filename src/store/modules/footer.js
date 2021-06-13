import axios from 'axios'

export default {
	state: {
		footer: {}
	},
	mutations: {
		updateFooterMenu(state, item) {
			state.footer = item
		}
	},
	actions: {
		async loadFooterMenu({commit}) {
			const menu = await axios.get('http://localhost:1337/footers')
			
			commit('updateFooterMenu', menu.data[0].footerMenu)
			console.log(menu.data[0].footerMenu, 'footer');
		}
	},
	getters: {
		
	}
}