<template>
	<div>
		<h3 class="Title">Номера, которые мы для вас подобрали</h3>
		
		<div
			class="Content"
			v-if="roomsList.length > 0"
			>
			<div
				class="RoomCard"
				@click="$router.push({ path: '/room', query: { rooms_id: item.Number } })"
				v-for="item in roomsList" :key="item.id">
				
				<swiper
					:pagination='{"dynamicBullets": true}'
					:breakpoints="swiperOptions.breakpoints"
					:slides-per-view="1"
					:space-between="5"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
					<swiper-slide><img class="SliderRoomImage" src="@/assets/images/rooms/room1.png" alt="room"></swiper-slide>
					<swiper-slide><img class="SliderRoomImage" src="@/assets/images/rooms/room1.png" alt="room"></swiper-slide>
					<swiper-slide><img class="SliderRoomImage" src="@/assets/images/rooms/room1.png" alt="room"></swiper-slide>
				</swiper>
				<div class="Disrcription"> 
					<div class="RoomInfo">
						<div class="Order">№ {{item.Number}}</div>
						<div
							v-show="item.Lux"
							class="Lux">Lux</div>
						<div class="Price">{{item.Price}}₽ в сутки</div>
						
					</div>
					<br>
					<div class="Rating">
						<div
							class="Stars"
							v-if="item.Stars === 1">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
						</div>
						<div
							class="Stars"
							v-if="item.Stars === 2">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
						</div>
						<div
							class="Stars"
							v-if="item.Stars === 3">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
						</div>
						<div
							class="Stars"
							v-if="item.Stars === 4">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star_border.svg" alt="" class="Star">
						</div>
						<div
							class="Stars"
							v-if="item.Stars === 5">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
							<img src="@/assets/icons/star.svg" alt="" class="Star">
						</div>
						<div class="Reviews">145 Отзывов</div>
					</div>
				</div>
			</div>	
		</div>
		<div
			class="ButtonGradient"
			v-if="roomsList.length > 0"
			@click="loadMoreRooms">загрузить еще
		</div>
		<div
			class="box Loader"
			v-if="roomsList.length === 0 & noRes === false"
			>
			<div class="container">
				<span class="circle"></span>
				<span class="circle"></span>
				<span class="circle"></span>
				<span class="circle"></span>
			</div>
		</div>

		<div
			class="NoRes"
			v-if="roomsList.length === 0 & noRes === true"
			>
			<span> ничего не найдено, поменяйте условия поиска!</span>
		</div>
		
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
	props: {
		roomsList: null,
	},
	emits: {
		loadMoreRooms: null,
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			swiperOptions: {
				breakpoints: {       
					// 320: {
					// 	slidesPerView: 1,
					// 	spaceBetween: 10
					// },
					// 770: {
					// 	slidesPerView: 2,
					// 	spaceBetween: 50
					// },
				
					// 771: {
					// 	slidesPerView: 4,
					// 	spaceBetween: 30
					// } 
				}
			}
		}		
		
	},
	created() {
	},
	computed: {
		noRes() {
			return this.$store.state.rooms.noRes
		},
	},
	methods: {
		loadMoreRooms() {
			this.$emit('loadMoreRooms')
		},
		onSwiper(swiper) {
			console.log(swiper);
		},
		onSlideChange() {
			console.log('slide change');
		},
	}
}
</script>

<style lang="scss" scoped>
.Title {
	font-size: 24px;
	color: #1F2041;
}
.Content {
	display: flex;
	width: 100%;
	align-items: flex-start;
	justify-content: space-around;
	flex-wrap: wrap;
}
.RoomCard {
	width: calc(100% / 3 - 12px);
	height: auto;
	margin: 0px 0px 20px;
	background: #FFFFFF;
	box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
	border-radius: 4px;
	transition: all .2s ease-out;
	&:hover {
		transform: scale(1.025)
	}
	.SliderRoomImage {
		width: 100%;
		border-radius: 4px;
	}
	.Disrcription{
		padding: 20px;
		.RoomInfo {
			display: flex;
			// justify-content: space-between;
			.Order {
				font-weight: bold;
				font-size: 14px;
				color: #1F2041;
			}
			.Lux {
				flex-basis: 10%;
				font-size: 12px;
				font-weight: bold;
				line-height: 15px;
				color: #BC9CFF;
				margin-left: 8px;
			}
			.Price {
				font-size: 14px;
				font-weight: bold;
				color: rgba(31, 32, 65, 0.5);
				margin-left: auto;
			}
		}
		.Rating {
			display: flex;
			justify-content: space-between;
			.Reviews {
				font-weight: bold;
				font-size: 14px;
				color: rgba(31, 32, 65, 0.5);
			}
			.Star{
				height: 18px;
			}

		}
	}
}

.Loader{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.NoRes {
	display: flex;
	align-items: center;
	justify-content: center;
}
.Button {
	margin: 0 0 40px 0;
}
.ButtonGradient {
	width: 100%;
}

@media (min-width: $MobileMini) and (max-width: calc(#{$Mobile} - 0.02px)) {
	.RoomCard {
		width: calc(100% / 1 - 12px);
	}
}

@media (min-width: $Mobile) and (max-width: calc(#{$TabletSmall} - 0.02px)) {
	.RoomCard {
		width: calc(100% / 1 - 12px);
	}
}

@media (min-width: $TabletSmall) and (max-width: calc(#{$Laptop} - 0.02px)) {
	.RoomCard {
		width: calc(100% / 1 - 12px);
	}
}

@media (min-width: $Laptop) and (max-width: calc(#{$Desktop} - 0.02px)) {
	.RoomCard {
		width: calc(100% / 2 - 12px);
	}
}
@media (min-width: $Desktop) and (max-width: calc(#{$FullSizeSmall} - 0.02px)) {
	.RoomCard {
		width: calc(100% / 2 - 12px);
	}
}
@media (min-width: $FullSizeSmall) and (max-width: calc(#{$FullSize} - 0.02px)) {
	
}
</style>