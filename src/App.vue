<template>
	<app-header/>
	<router-view/>
	<app-footer />
</template>

<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'


export default {
	data() {
		return {
		}
	},
	components: {
		appHeader,
		appFooter,
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


	
	.ImgMain {
		position: relative;
		height: 800px;
		background: center/cover no-repeat url('./assets/images/bg-main.png');
	}
</style>
