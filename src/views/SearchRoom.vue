<template>
	<div class="Container">
		<div class="Wrapp">
			<app-filter-rooms class="Filter"/>
			<app-rooms-list class="List"/>
		</div>
	</div>
</template>

<script>
import appRoomsList from '@/components/appRoomsList.vue'
import appFilterRooms from '@/components/appFilterRooms.vue'

export default {
	components: { appRoomsList, appFilterRooms },
		}
</script>

<style lang="scss" scoped>
	.Wrapp {
		padding: 20px 0px;
		display: flex;
		justify-content: space-between;
		.Filter {
			width: calc(((100%/4) * 1) - 15px);
		}
		.List {
			width: calc(((100%/4) * 3) - 15px);
		}
		
	}
	@media (min-width: $MobileMini) and (max-width: calc(#{$Mobile} - 0.02px)) {
		.Wrapp {
			display: flex;
			.Filter {
				display: none;
			}
			.List {
				width: 100%;
			}
			
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