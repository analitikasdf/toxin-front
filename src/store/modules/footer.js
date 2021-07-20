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
			const menu = await axios.get(`${process.env.VUE_APP_BASE_URL}/footers`)
			
			commit('updateFooterMenu', menu.data[0].footerMenu)
			console.log(process.env.VUE_APP_URL);
		}
	},
	getters: {
		
	}
}