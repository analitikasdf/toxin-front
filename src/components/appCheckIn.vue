<template>
	<div class="ModalWrap" @click="closeModal">
		<form action="" class="Form" @click.stop>
			<h2 class="Title">Регистрация аккаунта</h2>
			<input class="Input" type="text" placeholder="Имя" v-model="user.name">
			<input class="Input" type="text" placeholder="Фамилия" v-model="user.surname">
			<input class="custom-radio" type="radio" id="man"  name="radio" value="Мужчина" v-model="user.picked">
				<label for="man">Мужчина</label>
			<input class="custom-radio" type="radio" id="woman" name="radio" value="Женщина" v-model="user.picked">
				<label for="woman" class="Woomen">Женщина</label>
			<h2 class="SubTitle">дата рождения</h2>
			<input class="Input" type="date" name="" id="date">
			<h2 class="SubTitle">данные для входа в сервис</h2>
			<input class="Input" type="email" name="" id="email" placeholder="Email" v-model="user.email">
			<input class="Input" type="password" name="" id="password" placeholder="Пароль" v-model="user.password">
			<div class="WrapperCheckbox">
				<Toggle v-model="value" class="Toggle" :="options"/><span class="CheckboxText">Получать спецпредложения</span>
			</div>
			<button class="ButtonGradient Reg" @click.prevent="createUser">зарегистрироваться</button>
			<div class="LogIn">
				<p class="Account">Уже есть аккаунт на Toxin</p>
				<div class="wr">
					<button class="Button">войти</button>
				</div>
			</div>
			<!-- <img src='' class="CloseForm" /> -->
			<img src="@/assets/icons/cancel.svg" @click="closeModal" class="CloseForm" alt="">
		</form>
	</div>
</template>

<script>
import Toggle from '@vueform/toggle'

export default { 
	props: {
		
	},
	emits: {
		hendleCloseModalCeckIn: null
	},
	components: {
      Toggle,
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
				value: false,
				width: 40,
				height: 20,
				speed: 100,
				colors: {
					background: {
						on: '#BC9CFF',
						off: 'rgba(31, 32, 65, 0.25)'
					}
				},
			},
			isClose: true
		}
	},
	methods: {
		createUser() {
			const newUser = {
				name: this.user.name,
				surname: this.user.surname,
				picked: this.user.picked,
				email: this.user.email,
				password: this.user.password,
			}
			this.$store.dispatch('createNewUser', newUser)

			console.log(newUser);
		},
		closeModal() {
			this.$emit('hendleCloseModalCeckIn')
		}
	},
	computed: {
		
	}
}
</script>

<style lang="scss" scope>
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