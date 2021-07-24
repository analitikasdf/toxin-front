<template>
	<app-header/>
	<app-mobile-menu
		@open-mobile-menu="openMobileMenu"
	/>
	<router-view/>
	<app-footer />
</template>

<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
import appMobileMenu from '@/components/appMobileMenu'


export default {
	data() {
		return {
		}
	},
	components: {
		appHeader,
		appFooter,
		appMobileMenu,
		// appCheckIn,
		// AppLogIn
	},
	methods: {
		event() {
			document.addEventListener('click', e => {
				if (e.target.className !== 'MenuLink' && e.target.className !== 'MenuLink drop') {
					this.$store.state.menu.menu.forEach(i => {
						i.isDrop = false
					})
				}
			})
		},
		openModalCheckIn() {
			this.isCloseCheckIn = true;
		},
		closeModalCheckIn() {
			this.isCloseCheckIn = false;
		},
		openModalLogIn() {
			console.log('открыть вход');
			this.isCloseLogIn = true;
		},
		closeModalLogIn() {
			this.isCloseLogIn = false;
		},
	},
	computed: {
		getUser() {
			return this.$store.state.loginUser
		}
	},
	created: function() {
		let data = JSON.parse(localStorage.getItem('user'))
		console.log(data);
		if (data) {
			this.$store.commit('localStorage', data)
		}

		console.log(process.env.VUE_BASE_URL, "test");
	}
}
	

</script>

<style lang="scss">
	@import './assets/fonts/stylesheet.css';
	@import './assets/scss/_variables.scss';
	@import './assets/scss/UIkit.scss';
</style>
