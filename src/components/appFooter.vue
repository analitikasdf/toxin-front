<template>
	<div class="Footer Container">
		<div class="FooterItem">
			<img src="../assets/images/LogoHeader.svg" alt="">
			<div class="Descr">Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</div>
		</div>
		<div class="FooterItem" v-for="item in footer.footer" :key="item">
			<a to="#" class="FooterItemMenu" v-for="itemMenu in item" :key="itemMenu">{{itemMenu}}</a>
		</div>
		<div class="FooterItem">
			<div class="FooterItemMenu">Подписка</div>
			<div class="FooterItemMenu">Получайте специальные предложения и новости сервиса</div>
			<input class="Input" type="text">
		</div>
	</div>
	<div class="Line"></div>
	<div class="SubFooter Container">
		<div class="Copyright">Copyright © 2018 Toxin отель. Все права защищены.</div>
		<div class="SocialBlock ">
			<a class="SocialLink Twitter"></a>
			<a class="SocialLink Facebook"></a>
			<a class="SocialLink Instagram"></a>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			footer() {
				return this.$store.state.footer
			},
		},
		created() {
			this.$store.dispatch('loadFooterMenu')
		},
	}
</script>

<style lang="scss">
	.Footer {
		padding: 100px 0px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.FooterItem {
		max-width: 260px;
		font-size: 14px;
	}
	.FooterItem>.Descr {
		margin: 20px 0px;
		color: #1f2041bf;
	}
	.FooterItem>.FooterItemMenu {
		display: block;
		cursor: pointer;
		margin: 20px 0px;
		color: #1f204180;
		&:first-child {
			text-transform: uppercase;
			color: #1F2041;
			font-weight: bold;
			font-size: 12px;
		}
	}
	.SubFooter {
		display: flex;
		height: 70px;
		align-items: center;
		justify-content: space-between;
	}
	.SocialBlock {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.SocialLink {
		display: block;
		width: 24px;
		height: 24px;
		cursor: pointer;
		&.Twitter {
			margin: 0px 20px 0px 0px;
			background:  no-repeat center/100% url(../assets/icons/twitter.svg);
		}
		&.Facebook {
			margin: 0px 20px 0px 0px;
			background:  no-repeat center/100% url(../assets/icons/facebook.svg);
		}
		&.Instagram {
			background:  no-repeat center/100% url(../assets/icons/instagram.svg);
		}
	}
	.Copyright {
		font-size: 14px;
		color: #1f2041bf;
	}
	.Line {
		border-top: 1px solid #E5E5E5;
	}
	@media (min-width: $MobileMini) and (max-width: calc(#{$Mobile} - 0.02px)) {
		.Footer {
			padding: 50px 0;
			flex-direction: column;
		}
	}

	@media (min-width: $Mobile) and (max-width: calc(#{$TabletSmall} - 0.02px)) {
		.Footer {
			flex-direction: column;
		}
	}

	@media (min-width: $TabletSmall) and (max-width: calc(#{$Laptop} - 0.02px)) {
		.Footer {
			flex-direction: column;
		}
	}

	@media (min-width: $Laptop) and (max-width: calc(#{$Desktop} - 0.02px)) {
		.Footer {
			flex-direction: column;
		}
	}
	@media (min-width: $Desktop) and (max-width: calc(#{$FullSize} - 0.02px)) {
		
	}
</style>