import axios from 'axios'

export default {
	state: {
		menu: []
	},
	mutations: {
		updateMenu(state, item) {
			state.menu = item
		}
	},
	actions: {
		async loadMenu({ commit }) {
			const res = []
			const menu = 
			await axios
			.get(`${process.env.VUE_APP_BASEURL}/menus`)
			menu.data.forEach(i => {
					res.push({
						linkName: i.Name,
						isDrop: false,
						subMenu: i.sub_menus.map(i => i.name)
					})
				}
			)
			commit('updateMenu', res)
		},
	},
	getters: {
		
	},
}