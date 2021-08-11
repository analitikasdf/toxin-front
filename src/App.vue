<template>
	<transition-group name="fade">
		<app-modal
			v-if="message"
			@onCloseModal="closeModal">
			<template
				v-slot:login
				v-if="getUserNameLogin">
				<div>Добро пожаловать {{message}}</div>
			</template>
			<template
				v-slot:checkin
				v-if="getUserNameCheckin">
				<div>{{message}} Вы успешно зарегистрировались</div>
			</template>
		</app-modal>
	</transition-group>
	
	<app-header  />
	<router-view />
	<app-footer  />
	<!-- <pre>{{getUserName}}</pre> -->

</template>

<script>
import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'
import appModal from '@/components/appModal'


export default {
	data() {
		return {
			showModal: true
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
		closeModal() {
			this.$store.state.messageModal = ''
		}
	},
	computed: {
		getUserNameLogin() {
			return this.$store.state.logIn.loginUser.username
		},
		getUserNameCheckin() {
			return this.$store.state.checkIn.user.username
		},
		message() {
			return this.$store.state.messageModal
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
