<template>
	<div class="ImgMain">
		<img src="@/assets/images/bg-main.png" alt="" class="imgMini">
		<app-calendar />
	</div>
</template>

<script>
import appCalendar from '@/components/appCalendar.vue'


export default {
  components: { appCalendar },
	
}
</script>

<style lang="scss" scoped>
	.ImgMain {
		padding: 140px 140px;
		height: 800px;
		background: center/cover no-repeat url('../assets/images/bg-main.png');
	}
	.imgMini {
		display: none;
		width: 100%;
	}
	@media (min-width: $MobileMini) and (max-width: calc(#{$Mobile} - 0.02px)) {
		.ImgMain {
			padding: 0px 0px;
			height: auto;
		}
		.imgMini {
			display: block;
		}
	}

	@media (min-width: $Mobile) and (max-width: calc(#{$TabletSmall} - 0.02px)) {
		
	}

	@media (min-width: $TabletSmall) and (max-width: calc(#{$Laptop} - 0.02px)) {
		
	}

	@media (min-width: $Laptop) and (max-width: calc(#{$Desktop} - 0.02px)) {
		
	}
	@media (min-width: $Desktop) and (max-width: calc(#{$FullSize} - 0.02px)) {
		
	}
</style>