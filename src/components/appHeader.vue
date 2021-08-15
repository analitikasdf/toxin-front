<template>
	<header class="Header">
		<div class="Wrapp Container">
			<img
				src="../assets/images/LogoHeader.svg"
				class="Logo"
				alt="Logo"
				@click="goToHome">
			<button 
				class="hamburger hamburger--spring"
				:class="{'is-active': activeClassHumburher}"
				type="button"
				@click="activeClassHumburger">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>  
			<div class="Wrapper">
				<nav class="Menu">
					<div
						class="MenuItem"
						v-for="link in menu.menu" :key="link">
						<router-link
						to=""
							class="MenuLink"
							:class="{'drop': link?.subMenu.length > 0}"
							@click.prevent.stop="drop(link)"
							href="#"
						>{{link.linkName}}</router-link>
						<div
							v-click-outside="onClickOutside"
							v-if="link.isDrop"
							class="DropMenu"
							
							ref="target">
							<router-link
							to=""
								class="DropMenuLink MenuLink"
								href="" v-for="dropLink in link.subMenu" :key="dropLink">
								{{dropLink}}
							</router-link>
						</div>
					</div>
				</nav>
				<div class="Authorization">
					<router-link
						v-if="!loginUser"
						to="/login" class="Button"
						@click.prevent="openModalLogIn">
						войти
					</router-link>
					<router-link
						v-if="loginUser"
						to="/" class="Button"
						@click.prevent="logOut">
						выйти
					</router-link>
					<router-link
						v-if="!loginUser"
						to="/checkin"
						class="ButtonGradient"
						@click.prevent="openModalCheckin">
						зарегистрироваться
					</router-link>
					<div
						v-if="loginUser"
						class="Checked">
						{{loginUser}}
					</div>
				</div>
			</div>
		</div>
		<transition name="fade">
			<app-mobile-menu
				v-if="activeClassHumburher"
				:openMobileMenu="activeClassHumburher"
			/>
		</transition> 
	</header>
</template>

<script>
import appMobileMenu from '@/components/appMobileMenu'


export default {
	emits: {
		openModalCheckIn: null,
		ModalLogIn: null,
	},
	components: {
		appMobileMenu,
	},
	data () {
		return {
			value: 0,
			menu: [],
			activeDrop: false,
			openMobileMenu: false,

			activeClassHumburher: false,

			vcoConfig: {
				handler: this.handler,
				middleware: this.middleware,
				events: ['dblclick', 'click'],
				// Note: The default value is true, but in case you want to activate / deactivate
				//       this directive dynamically use this attribute.
				isActive: true,
				// Note: The default value is true. See "Detecting Iframe Clicks" section
				//       to understand why this behaviour is behind a flag.
				detectIFrame: true,
				// Note: The default value is false. Sets the capture option for EventTarget addEventListener method.
				//       Could be useful if some event's handler calls stopPropagation method preventing event bubbling.
				capture: false
			}
		}
	},
	
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
		drop(item) {
			this.menu.menu.forEach(i => {
				if (i.isDrop === false && i.linkName === item.linkName) {
					i.isDrop = true
					console.log('bigmenu');
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
		},
		onClickOutside () {
			
			this.menu.menu.forEach(i => {
				i.isDrop = false
			})
		},
		activeClassHumburger() {
			this.activeClassHumburher = !this.activeClassHumburher
			this.openMobileMenu = this.activeClassHumburher
			console.log(this.openMobileMenu, '111');
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "~hamburgers/_sass/hamburgers/hamburgers.scss";

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}
  

	.hamburger {
		display: none;
		padding: 15px 0px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
	}
	
	.Header {
		min-height: 70px;
		box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
		.Wrapp {
			display: flex;
			justify-content: space-between;
		}
	}
	.Wrapper {
			display: flex;
			align-items: center;
			justify-content: space-around;
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
		display: block;
		z-index: 9999;
		

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




	@media (min-width: $MobileMini) and (max-width: calc(#{$Mobile} - 0.02px)) {
		.Wrapper {
			display: none;
		}
		.hamburger {
			display: inline-block;
		}
	}

	@media (min-width: $Mobile) and (max-width: calc(#{$TabletSmall} - 0.02px)) {
		.Wrapper {
			display: none;
		}
		.hamburger {
			display: inline-block;
		}
	}

	@media (min-width: $TabletSmall) and (max-width: calc(#{$Laptop} - 0.02px)) {
		.Wrapper {
			display: none;
		}
		.hamburger {
			display: inline-block;
		}
	}

	@media (min-width: $Laptop) and (max-width: calc(#{$Desktop} - 0.02px)) {
		.MenuLink {
			font-size: 12px;
		}
	}
	@media (min-width: $Desktop) and (max-width: calc(#{$FullSize} - 0.02px)) {
		
	}
</style>