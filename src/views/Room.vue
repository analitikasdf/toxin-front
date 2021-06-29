<template>
	<div class="Gallery">
		<img src="../assets/images/rooms/imageRoom1.png" alt="imageRoom1" class="ImgBig">
		<div class="Wrapp">
			<img src="../assets/images/rooms/imageRoom2.png" alt="imageRoom2" class="Img">
			<img src="../assets/images/rooms/imageRoom3.png" alt="imageRoom3" class="Img">
		</div>
	</div>
	<div class="Wrapper Container">
		<div class="RoomInfo">
			<div class="RoomDetails">
				<div class="Item">
					<img class="Icon"/>
					<div class="Wrapp">
						<div class="Title">Комфорт</div>
						<div class="Descr">Шумопоглощающие стены</div>
					</div>
				</div>
				<div class="Item">
					<img class="Icon"/>
					<div class="Wrapp">
						<div class="Title">Удобство</div>
						<div class="Descr">Окно в каждой из спален</div>
					</div>
				</div>
				<div class="Item">
					<img class="Icon"/>
					<div class="Wrapp">
						<div class="Title">Уют</div>
						<div class="Descr">Номер оснащён камином</div>
			</div>
			<div class="ImpressionsRoom">

			</div>
			<div class="Reviews">
				<div class="Title">Отзывы посетителей номера</div>
				<div class="NumberReviews">2 отзыва</div>
				<div class="Item">
					<div class="User">

					</div>
					<div class="Review">

					</div>
				</div>
			</div>
			<div class="Rules">
				<div class="Title">Правила</div>
				<div class="Item">Нельзя с питомцами</div>
				<div class="Item">Без вечеринок и мероприятий</div>
				<div class="Item">Время прибытия — после 13:00, а выезд до 12:00</div>
			</div>
			<div class="Cancellations">
				<div class="Title">Отмена</div>
				<div class="Descr">Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.</div>
			</div>
		</div>
		<div class="RoomCalculator">

		</div>	</div>
			<div class="ImpressionsRoom">

			</div>
			<div class="Reviews">
				<div class="Title">Отзывы посетителей номера</div>
				<div class="NumberReviews">2 отзыва</div>
				<div class="Item">
					<div class="User">

					</div>
					<div class="Review">

					</div>
				</div>
			</div>
			<div class="Rules">
				<div class="Title">Правила</div>
				<div class="Item">Нельзя с питомцами</div>
				<div class="Item">Без вечеринок и мероприятий</div>
				<div class="Item">Время прибытия — после 13:00, а выезд до 12:00</div>
			</div>
			<div class="Cancellations">
				<div class="Title">Отмена</div>
				<div class="Descr">Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.</div>
			</div>
		</div>
		<div class="RoomCalculator">
			<form class="Form">
				<div class="RoomInfoHeader">
					<div class="Order">№ 888</div>
					<div class="Lux">люкс</div>
					<div class="Price">9 990₽ в сутки</div>
				</div>
				<div class="Arrival">прибытие
					<input class="Input" type="date">
				</div>
				<div class="Departure">выезд
					<input class="Input" type="date">
				</div>
				<div class="Guests">гости
					<input class="Input" type="number">
				</div>
				<button class="ButtonGradient" @click="toRooms">подобрать номер</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.Gallery {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: 650px;
		.Wrapp {
			width: 32%;
			.Img {
				width: 100%;
				height: 50%;
				display: block;
			}
		}
		.ImgBig {
			width: 68%;
			height: 100%;
		}
	}
	.Wrapper {
		display: flex;
	}
	.RoomInfo {
		width: 66%;
	}
	.Form {
		display: flex;
		flex-wrap: wrap;
		padding:40px 30px;
		max-width: 380px;
		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.12);
		box-sizing: border-box;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
		border-radius: 4px;
	}
	.RoomInfoHeader {
		display: flex;
		align-items: flex-end;
		.Order {
			font-weight: bold;
			font-size: 18px;
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
	.RoomCalculator {
		width: 34%;
	}
	.Title {
		font-weight: bold;
		font-size: 19px;
		color: #1F2041;
	}
	.Arrival, .Departure {
		width: 45%;
		display: inline-block;
		font-weight: bold;
		font-size: 12px;
		text-transform: uppercase;
		
	}
	.Guests {
		width: 100%;
		margin: 20px 0px;
		font-weight: bold;
		font-size: 12px;
		text-transform: uppercase;
		input {
			display: block;
		}
	}
	.ButtonGradient {
		width: 100%;
		position: relative;
		z-index: 1;
		&::after {
			content: '';
			top: 6px;
			right: 10px;
			display: block;
			height: 22px;
			width: 22px;
			position: absolute;
			background: url('../assets/icons/arrow_forward.svg') center/cover ;
		}
	}
</style>