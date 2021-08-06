<template>
	<div class="Container">
		<div class="Wrapp">
			<app-filter-rooms
				class="Filter"
				:roomsPriceMax="roomsPriceMax"
				:roomsPriceMin="roomsPriceMin"
				:moreRooms="moreRooms"
				@minValue="onMinValue"
				@maxValue="onMaxValue"
			/>
			<app-rooms-list
				class="List"
				:roomsList="loadRooms"
				@loadMoreRooms="onLoadMoreRooms"
			/>
		</div>
	</div>
</template>

<script>
import appRoomsList from '@/components/appRoomsList.vue'
import appFilterRooms from '@/components/appFilterRooms.vue'

export default {
	components: { appRoomsList, appFilterRooms },
	data() {
		return {
			roomsMinPrice: 0,
			roomsMaxPrice: 30000,
			filteredRooms: [],
			moreRooms: 5,
		}			
	},
	methods: {
		// onMinValue(data) {
		// 	this.roomsMinPrice = data
		// },
		// onMaxValue(data) {
		// 	this.roomsMaxPrice = data
		// }
		onLoadMoreRooms() {
			this.moreRooms = this.moreRooms + 5
			console.log(this.moreRooms);
		}
	},
	mounted() {
		const item = {}
			item.min = this.roomsMinPrice
			item.max = this.roomsMaxPrice
			this.$store.dispatch('roomsLoad', item)
	},
	computed: {
		loadRooms() {
			return this.$store.state.rooms.roomsList
		},
		roomsPriceMax() {
			return Math.max.apply(Math, this.$store.state.rooms.roomsList.map(i => {
				return i.Price
			}))
		},
		roomsPriceMin() {
			return Math.min.apply(Math, this.$store.state.rooms.roomsList.map(i => {
				return i.Price
			}))
		},
		on() {
			return this.MinPrice
		},
		
	},
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
			flex-direction: column;
			.Filter {
				width: 100%;
				padding: 0px 0px 30px;
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