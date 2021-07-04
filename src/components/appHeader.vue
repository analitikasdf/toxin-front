<template>
	<nav class="Header">
		<div class="Wrapp Container">
			<img src="../assets/images/LogoHeader.svg" class="Logo" alt="Logo" @click="goToHome">
			<div class="Wrapp">
				<div class="Menu" >
				<div class="MenuItem" v-for="link in menu.menu" :key="link">
					<a
					class="MenuLink"
					:class="{'drop': link?.subMenu.length > 0}"
					@click="dropMenu(link.linkName)"
					href="#"
					>{{link.linkName}}</a>
					<div class="DropMenu" :class="{active: link.isDrop}" ref="target">
						<a class="DropMenuLink MenuLink" href="" v-for="dropLink in link.subMenu" :key="dropLink">{{dropLink}}</a>
					</div>
				</div>
			</div>
			<div class="Authorization">
				<router-link v-if="!loginUser" to="/login" class="Button" @click.prevent="openModalLogIn">войти</router-link>
				<router-link v-if="loginUser" to="/" class="Button" @click.prevent="logOut">выйти</router-link>
				<router-link v-if="!loginUser" to="/checkin" class="ButtonGradient" @click.prevent="openModalCheckin">зарегистрироваться</router-link>
				<div v-if="loginUser" class="Checked">{{loginUser}}</div>
			</div>
			</div>
		</div>
	</nav>
</template>

<script>
// import { ref } from 'vue'
// import { onClickOutside } from '@vueuse/core'

export default {
	emits: {
		openModalCheckIn: null,
		ModalLogIn: null,
	},
	data () {
		return {
			menu: [
				
			],
			activeDrop: false,
		}
	},
	// setup() {
	// 	const target = ref(null)

	// 	onClickOutside(target, (event) => console.log(event))
		
	// 	return { target }
	// },
	computed: {
		loginUser() {
			return this.$store.state.logIn.loginUser.username
		},
	},
	created() {
		this.$store.dispatch('loadMenu')
		this.menu = this.$store.state.menu 
	},
	methods: {
		dropMenu(dropMenu) {
			this.menu.menu.forEach(i => {
				if (i.isDrop === false && i.linkName === dropMenu) {
					i.isDrop = true
				} else {
					i.isDrop = false
				}
			})
		},
		openModalCheckin() {
			this.$emit('openModalCheckIn')
		},
		openModalLogIn() {
			this.$emit('ModalLogIn')
		},
		logOut() {
			this.$store.commit('logOut')
		},
		goToHome() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
	.Header {
		height: 70px;
		box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
		.Wrapp {
			display: flex;
			justify-content: space-between;
		}
	}
	.Wrapp {
		.Menu {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-right: 0px;
		}
	}
	.Logo {
		margin: 15px 0px;
		top: 0px;
		left: 0px;
		cursor: pointer;
	}
	.MenuLink {
		font-family: Montserrat;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: rgba(31, 32, 65, 0.5);
		text-decoration: none;
		position: relative;
		padding: 0px 10px;
		&.active {
			font-weight: bold;
			color: rgba(31, 32, 65, 0.75);
		}
		&.drop {
			margin-right: 15px;
			&:after {
			content: '';
			background:  no-repeat center/100% url(../assets/icons/arrowDown.svg);
			width: 12px;
			height: 8px;
			position: absolute;
			margin-top: 5px;
			margin-left: 5px;
			margin-right: 10px;
			}
		}	
	}
	.MenuItem {
		position: relative;
	}
	.DropMenu {
		margin: 10px 0px 0px 0px;
		display: none;
		padding: 10px 0px;
		height: auto;
		position: absolute;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0,0,0,0.1);
		background-color: #fff;
		&.active{
			display: block;
			z-index: 9999;
		}

	}
	.DropMenuLink {
		display: block;
		text-decoration: none;
		margin: 8px 0px;
	}
	.Authorization {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.Checked {
		font-size: 14px;
		color: rgba(31, 32, 65, 0.5);
	}
</style>