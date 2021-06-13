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
			<!-- <img src="@/assets/icons/cancel.svg" @click="closeModal" class="CloseForm" alt=""> -->
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
            this.$router.push('/')
		},
		async logInUser() {
			const user = {
				email: this.user.email,
				password: this.user.password
			}
			await this.$store.dispatch('logInUser', user)
			this.closeModal()
			console.log(this.$store.state.logInUser, 'вывод пользователя');
		}
	},
}
</script>


<style lang="scss" scouped>
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