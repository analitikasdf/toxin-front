<template>
	<div>
		<h3 class="Title">Номера, которые мы для вас подобрали</h3>
		<div class="Content">
			<div class="RoomCard">
				<img class="SliderRoomImage" src="@/assets/images/rooms/room1.png" alt="room">
				<div class="Disrcription">
					<div class="RoomInfo">
						<div class="Order">№ 888</div>
						<div class="Lux">люкс</div>
						<div class="Price">9 990₽ в сутки</div>
					</div>
					<br>
					<div class="Rating">
						<div class="Stars">12345</div>
						<div class="Reviews">145 Отзывов</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rooms: {
				room1: {
					order: '214',
					lux: false,
					price: 5185,
					stars: 5,
					reviews: 24,
				}
			}
		}
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
	justify-content: space-between;
	flex-wrap: wrap;
}
.RoomCard {
	width: calc(100% / 3 - 12px);
	height: auto;
	margin: 20px 0px;
	background: #FFFFFF;
	box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
	border-radius: 4px;
	.SliderRoomImage {
		width: 100%;
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
			.Stars {

			}
			.Reviews {
				font-weight: bold;
				font-size: 14px;
				color: rgba(31, 32, 65, 0.5);
			}
		}
	}
	
}
</style>