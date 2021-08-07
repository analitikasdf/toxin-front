<template>
	<div class="ImgMain">
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
		},
		userCheck() {
			return  this.$store.state.checkIn.user
		}
	},
	watch: {
		userCheck() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped >
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
</style>