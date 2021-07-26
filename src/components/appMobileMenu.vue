<template>
	<nav
		class="Menu"
		:class="{isActive: openMobileMenu}"
		v-if="menuActive">
		<div
			class="MenuItem"
			v-for="link in menu.menu" :key="link">
			<a
				class="MenuLink"
				:class="{'drop': link?.subMenu.length > 0}"
				@click.stop="drop(link)"
				href="#"
			>{{link.linkName}}</a>
			<div
				v-click-outside="onClickOutside"
				v-if="link.isDrop"
				class="DropMenu"
				@click.prevent
				
				ref="target">
				<a
					class="DropMenuLink MenuLink"
					href="" v-for="dropLink in link.subMenu" :key="dropLink"
					@click.prevent>
					{{dropLink}}
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		openMobileMenu: Boolean,
	},
	data() {
		return {
			menu: [],
			activeDrop: false,
			menuActive: true,

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
	created() {
		this.$store.dispatch('loadMenu')
		this.menu = this.$store.state.menu 
	},
	methods: {
		drop(item) {
			this.menu.menu.forEach(i => {
				if (i.isDrop === false && i.linkName === item.linkName) {
					i.isDrop = true
				} else {
					i.isDrop = false
				}
			})
		},
		onClickOutside (event) {
			console.log('Clicked outside. Event: ', event)
			this.menu.menu.forEach(i => {
				i.isDrop = false
			})
		},
		activeClassHumburger() {
			this.activeClassHumburher = !this.activeClassHumburher
		},
		openMenu() {
			console.log(this.openMobileMenu, 'флаг мобильного меню');
		}
	}
}
</script>

<style lang="scss" scoped>
	.Menu {
		display: none;
		transition: all .2s;
		overflow: visible;
		padding: 0 0 10px 0;
	}
	.isActive {
		display: block;
	}
	.MenuLink {
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		color: rgba(31, 32, 65, 0.5);
		text-decoration: none;
		position: relative;
		padding: 5px 10px;
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
		display: none;
		padding: 5px 0px;
		height: auto;
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
</style>