<template>
	<app-modal v-if="getUserName">
		{{getUserName}}
	</app-modal>
	<app-header v-cloak />
	<router-view v-cloak />
	<app-footer v-cloak />
	<!-- <pre>{{getUserName}}</pre> -->
</template>

<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
import appModal from '@/components/appModal'


export default {
	data() {
		return {
		}
	},
	components: {
		appHeader,
		appFooter,
		appModal,
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
		getUserName() {
			return this.$store.state.logIn.loginUser.username
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
	#app {
	}
</style>
