<template>
    <div class="ModalWrap" @click="closeModal">
		<form action="" class="Form" @click.stop>
			<h2 class="Title">Войти</h2>
			<input class="Input" type="email" placeholder="Email" v-model="user.email">
			<input class="Input" type="password" placeholder="Пароль" v-model="user.password">
			<div class="LogIn">
				<p class="Account">Уже есть аккаунт на Toxin</p>
				<div class="wr">
					<button @click.prevent="logInUser" class="Button">войти</button>
				</div>
			</div>
			<!-- <img src='' class="CloseForm" /> -->
			<img src="@/assets/icons/cancel.svg" @click="closeModal" class="CloseForm" alt="">
		</form>
	</div>
</template>

<script>
export default {
	emits: {
		hendleCloseModalLogIn: null
	},
	data() {
		return {
			user: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		closeModal() {
			this.$emit('hendleCloseModalLogIn')
		},
		logInUser() {
			const user = {
				email: this.user.email,
				password: this.user.password
			}
			this.$store.dispatch('logInUser', user)
			this.closeModal()
		}
	}
}
</script>


<style>
	.Title {
		text-align-last: left;
	}
</style>