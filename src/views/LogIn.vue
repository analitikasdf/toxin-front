<template>
	<div class="ImgMain">
		<div class="ModalWrap" @click="closeModal">
			<form action="" class="Form" @click.stop>
				<div
					class="box Loader"
					v-if="loader && !setUserError.data?.error"
					>
					<div class="container">
						<span class="circle"></span>
						<span class="circle"></span>
						<span class="circle"></span>
						<span class="circle"></span>
					</div>
				</div>
				<div v-if="setUserError.data?.error" class="errorLogin">неверное имя пользователя или пароль</div>
				<h2 class="Title">Войти</h2>
				<input class="Input animate__animated" :class="classObject" type="email" name="" id="email" placeholder="Email" v-model="user.email">
				<div v-if="!v$.user.email.email.$response" class="Valid">укажите почту верно</div>
				<div v-if="v$.user.email.required.$invalid && v$.user.email.$dirty" class="Valid">поле не может быть пустым</div>
				<input class="Input animate__animated" :class="classObject" type="password" name="" id="password" placeholder="Пароль" v-model="user.password">
				<div v-if="v$.user.password.required.$invalid && v$.user.password.$dirty" class="Valid">поле не может быть пустым</div>
				<div class="LogIn">
					<p class="Account">Уже есть аккаунт на Toxin</p>
					<div class="wr">
						<button @click.prevent="logInUser" class="Button">войти</button>
					</div>
				</div>
				<!-- <img src='' class="CloseForm" /> -->
				<!-- <img src="@/assets/icons/cancel.svg" @click="closeModal" class="CloseForm" alt=""> -->
			</form>
		</div>
	</div>
	
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useStorage } from '@vueuse/core'

export default {
	emits: {
		hendleCloseModalLogIn: null
	},
	data() {
		return {
			user: {
				email: '',
				password: '',
			},
			loader: false
		}
	},
	setup () {
		const store = useStorage('my-storage', 
			{
				user: 123
			}
		)

		return { v$: useVuelidate(), store }
	},
	validations () {
		return {
			user: {
				email: { required, email },
				password: {required}
			},
			// firstName: { required }, // Matches this.firstName
			// lastName: { required }, // Matches this.lastName
			// contact: {
			// 	email: { required, email } // Matches this.contact.email
			// }
		}
	},
	methods: {
		closeModal() {
			this.$emit('hendleCloseModalLogIn')
            this.$router.push('/')
		},
		async logInUser() {
			await this.v$.$touch()
			if (this.v$.$error) return

			this.loader = true
			
			this.$store.commit('clearError')
			const user = {
				email: this.user.email,
				password: this.user.password,
			}
			await this.$store.dispatch('logInUser', user)
		},
	},
	computed: {
		setUser() {
			return this.$store.state.logIn.loginUser.username
		},
		setUserError() {
			return this.$store.state.logIn.loginUserError
		},
		classObject() {
			return {
				animate__headShake: this.v$.user.email.$error,
				ErrorClass: this.v$.user.email.$error
			}
		},
		
	},
	watch: {
		setUser() {
			this.closeModal()
		},
		// setUserError() {
		// 	this.loader = false
		// },
	},
}
</script>

<style lang="scss" scoped>
	.ImgMain {
		position: relative;
		height: 800px;
		background: center/cover no-repeat url('../assets/images/bg-main.png');
	}
	.ErrorClass {
		border-color: red;
	}
	.Valid { 
		font-size: 11px;
		color: red;
	}
	.Form {
		position: relative;
	}
	.Loader {
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%, -50%);
	}
</style>