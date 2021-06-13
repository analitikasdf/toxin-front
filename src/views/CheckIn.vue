<template>
	<div class="ModalWrap" @click="closeModal">
		<form action="" class="Form" @click.stop>
			<h2 class="Title">Регистрация аккаунта</h2>
			<input class="Input animate__animated" :class="classObject" type="text" placeholder="Имя" v-model="v$.user.name.$model">
			<!-- <pre>{{v$.user.$model}}</pre> -->
			<div v-if="v$.user.name.required.$invalid && v$.user.name.$dirty" class="Valid">поле не может быть пустым</div>
			<input class="Input animate__animated" :class="classObject" type="text" placeholder="Фамилия" v-model="v$.user.surname.$model">
			<div v-if="v$.user.surname.required.$invalid && v$.user.surname.$dirty" class="Valid">поле не может быть пустым</div>
			<div class="RadioBlock">
				<input class="custom-radio" type="radio" id="man"  name="radio" value="Мужчина" v-model="user.picked">
				<label for="man">Мужчина</label>
				<input class="custom-radio Wooman" type="radio" id="woman" name="radio" value="Женщина" v-model="user.picked">
				<label for="woman" class="Woomen">Женщина</label>
			</div>
			<h2 class="SubTitle">дата рождения</h2>
			<input class="Input" type="date" name="" id="date">
			<h2 class="SubTitle">данные для входа в сервис</h2>
			<input class="Input animate__animated" :class="classObject" type="email" name="" id="email" placeholder="Email" v-model="v$.user.email.$model">
			<div v-if="!v$.user.email.email.$response" class="Valid">укажите почту верно</div>
			<div v-if="v$.user.email.required.$invalid && v$.user.email.$dirty" class="Valid">поле не может быть пустым</div>
			<input class="Input animate__animated" :class="classObject" type="password" name="" id="password" placeholder="Пароль" v-model="v$.user.password.$model">
			<div v-if="v$.user.password.required.$invalid && v$.user.password.$dirty" class="Valid">поле не может быть пустым</div>
			<div class="WrapperCheckbox">
				<Toggle v-model="options.value" class="Toggle" :="options"/><span class="CheckboxText">Получать спецпредложения</span>
			</div>
			<button class="ButtonGradient Reg" @click.prevent="createUser">зарегистрироваться</button>
			<div class="LogIn">
				<p class="Account">Уже есть аккаунт на Toxin</p>
				<div class="wr">
					<router-link to="/login" class="Button">войти</router-link>
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
import Toggle from '@vueform/toggle'

export default { 
	props: {
	},
	emits: {
	},
	components: {
      Toggle,
    },
	setup () {
		return { v$: useVuelidate() }
	},
	data() {
		return {
			user: {
				name: '',
				surname: '',
				picked: '',
				email: '',
				password: '',
			},
			options: {
				value: true,	
			},
		}
	},
	validations () {
		return {
			user: {
				name: { required },
				surname: {required},
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
		createUser() {
			this.v$.$touch()

			if (this.v$.$error) return 
				const newUser = {
				name: this.v$.user.$model.name,
				surname: this.v$.user.$model.surname,
				// picked: this.v$.user.picked,
				email: this.v$.user.$model.email,
				password: this.v$.user.$model.password,
				}
				this.$store.dispatch('createNewUser', newUser)

				console.log(newUser);
		},
		closeModal() {
			this.$router.push('/')
		}
	},
	computed: {
		classObject() {
			return {
				animate__headShake: this.v$.user.email.$error,
				ErrorClass: this.v$.user.email.$error
			}
		}
	}
}
</script>

<style lang="scss" scope>
	.ErrorClass {
		border-color: red;
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
		text-transform: uppercase;input:nth-last-child() {
			margin-left: 10px;
		}
	}
	.Special {
		font-weight: normal;
		font-size: 14px;
		color: rgba(31, 32, 65, 0.75);
	}
	.RadioBlock {
		margin: 10px 0;
		.Woomen {
			margin-left: 10px;
		}
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
		margin: 10px 0;
	}
	.Valid { 
		font-size: 11px;
		color: red;
	}
</style>