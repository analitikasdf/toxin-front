<template>
    <div class="ModalWrap" @click="closeModal">
		<form action="" class="Form" @click.stop>
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
		}
	},
	watch: {
		setUser() {
			this.closeModal()
		}
	},
}
</script>


<style lang="scss" scouped>
	.ErrorClass {
		border-color: red;
	}
	.Valid { 
		font-size: 11px;
		color: red;
	}
	.Title {
		text-align-last: left;
	}
    .ModalWrap {
		display: flex;
		position: fixed; 
		left: 0;
		top: 0;
		width: 100%; 
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		overflow: auto;
		&::-webkit-scrollbar { 
			display: none; 
		}
	}
	.Form {
		position: relative;
		margin: auto;
		top: 0; left: 0; bottom: 0; right: 0;
		padding: 40px 30px;
		display: block;
		width: 380px;
		height: auto;
		border: 1px solid rgba(0, 0, 0, 0.12);
		background: #FFF;
		z-index: 0;
		& > .Woomen {
			margin-left: 20px;
		}
	}
	.Title {
		font-weight: bold;
		font-size: 24px;
		text-align: center;
		margin: 0px auto 20px;
	}
	.SubTitle {
		font-weight: bold;
		font-size: 12px;
		text-align: left;
		text-transform: uppercase;
	}
	.Special {
		font-weight: normal;
		font-size: 14px;
		color: rgba(31, 32, 65, 0.75);
	}
	.LogIn {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.Account {
		font-weight: normal;
		font-size: 14px;
	}
	.Reg {
		margin-top: 20px;
	}
	.LogIn {
		margin-top: 30px;
	}
	.Special {
		margin-top: 15px;
	}
	.CheckboxText {
		font-size: 14px;
		color: rgba(31, 32, 65, 0.75);
		margin-left: 10px;
	}
	.CloseForm {
		position: absolute;
		right: -60px;
		top: 0px;
		color: #fff;
		border: 2px solid #fff;
		border-radius: 50%;
		padding: 3px;
		width: 40px;
		height: 40px;

	}
	.WrapperCheckbox {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
</style>