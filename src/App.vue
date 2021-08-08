<template>
	<app-header v-cloak />
	<router-view v-cloak />
	<app-footer v-cloak />
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
		// openModalCheckIn() {
		// 	this.isCloseCheckIn = true;
		// },
		// closeModalCheckIn() {
		// 	this.isCloseCheckIn = false;
		// },
		// openModalLogIn() {
		// 	console.log('открыть вход');
		// 	this.isCloseLogIn = true;
		// },
		// closeModalLogIn() {
		// 	this.isCloseLogIn = false;
		// },
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
	}
}
	

</script>

<style lang="scss">
	@import './assets/fonts/stylesheet.css';
	@import './assets/scss/_variables.scss';
	@import './assets/scss/UIkit.scss';
</style>
