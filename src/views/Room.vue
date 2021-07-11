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
				<h3 class="Title">Сведения о номере</h3>
				<div class="Item">
					<img src="@/assets/icons/insert_emoticon.svg" class="Icon"/>
					<div class="Wrapp">
						<div class="Title">Комфорт</div>
						<div class="Descr">Шумопоглощающие стены</div>
					</div>
				</div>
				<div class="Item">
					<img src="@/assets/icons/location_city.svg" class="Icon"/>
					<div class="Wrapp">
						<div class="Title">Удобство</div>
						<div class="Descr">Окно в каждой из спален</div>
					</div>
				</div>
				<div class="Item">
					<img src="@/assets/icons/whatshot_room.svg" class="Icon"/>
					<div class="Wrapp">
						<div class="Title">Уют</div>
						<div class="Descr">Номер оснащён камином</div>
					</div>
				</div>	
			</div>
			<div class="ImpressionsRoom">
			</div>
			<div class="Reviews">
				<div class="Header">
					<div class="Title">Отзывы посетителей номера</div>
					<div class="NumberReviews">2 отзыва</div>
				</div>
				<div class="Item">
						<div class="Avatar">
							<img src="@/assets/images/users-reviews/user1.png" alt="" class="Img">
						</div>
						<div class="User">
							<div class="Name">Мурад Сарафанов</div>
							<div class="Date">5 дней назад</div>
						</div>
						<div class="Likes">
							<div class="Box">
								<img class="Heart" src="@/assets/icons/favorite.svg" alt="">
								<div class="Number">12</div>
							</div>
						</div>
						<div class="Text">
							Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.
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
				<div class="PriceItem">
					<div class="Item">9 990₽ х 4 суток</div>
					<div class="Item">39 960₽</div>
				</div>
				<div class="PriceItem">
					<div class="Item">Сбор за услуги: скидка 2 179₽</div>
					<div class="Item">0₽</div>
				</div>
				<div class="PriceItem">
					<div class="Item">Сбор за дополнительные услуги</div>
					<div class="Item">300₽</div>
				</div>
				<div class="PriceItem Total">
					<div class="Item Total">Итого</div>
					<div class="Item Total">38 081₽</div>
				</div>
				<button class="ButtonGradient" @click="toRooms">забронировать</button>
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
		margin-top: 70px;
	}
	.RoomInfo {
		width: 66%;
		display: flex;
		flex-wrap: wrap;
		.RoomDetails {
			max-width: 280px;
			width: 280px;
			.Title {
				font-weight: bold;
				font-size: 19px;
				text-align: left;
			}
			.Item {
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				padding-bottom: 20px;
				margin: 20px 20px 20px 0px;
				border-bottom: 1px solid rgba(31, 32, 65, 0.1);
				&:last-child {
					border-bottom: 0px solid rgba(31, 32, 65, 0.1);
					padding-bottom: 0px;
				}
				.Wrapp {
					display: flex;
					flex-direction: column; 
					align-items: flex-start;
					justify-content: space-between;
					margin-left: 10px;
					height: 40px;
					.Title {
						font-weight: bold;
						font-size: 14px;
						color: $ColorDark2;
						margin: 0;
					}
					.Descr {
						font-size: 14px;
						color: $ColorDark2;
						margin-bottom: 0;
					}
				}
			}
		}
		.ImpressionsRoom {
			width: 280px;
			max-width: 280px;
			background-color: $ColorAlert;
		}
		.Reviews {
			width: 100%;
			.Header {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				margin: 30px 0px 20px 0px;
				.Title {
					margin: 0;
					font-size: 19px;
				}
				.NumberReviews {
					font-size: 14px;
					color: $ColorDark3;
				}
			}
			.Item {
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				flex-wrap: wrap;
				font-weight: normal;
				font-size: 14px;
				color: $ColorDark2;
				.Avatar {
					width: 10%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.User {
					width: 90%;
					padding: 0px 20px 20px;
					.Name {
						margin: 0px 0px 10px;
						font-weight: bold;
					}
				}
				.Likes {
					width: 10%;
					display: flex;
					align-items: center;
					justify-content: center;
					.Box {
						width: 40px;
						display: flex;
						align-items: center;
						justify-content: flex-start;
						padding: 3px;
						border: 1px solid $ColorPurple;
						border-radius: 10px;
						.Heart {

						}
						.Number {
							font-size: 10px;
							margin-left: 7px;
						}
					}
				}
				.Text {
					width: 90%;
					padding: 0px 20px 20px;
				}
			}
		}
		.Rules {
			width: 50%;
			margin-top: 30px;
			padding-left: 30px;
			.Title {
				text-align: left;
				font-weight: bold;
				font-size: 19px;
			}
			.Item {
				position: relative;
				font-weight: normal;
				font-size: 14px;
				line-height: 24px;
				color: $ColorDark2;
				&::before {
					content: '';
					display: block;
					position: absolute;
					top: 6px;
					left: -16px;
					width: 10px;
					height: 10px;
					background-color: $ColorDark4;
					border-radius: 50%;
				}
			}
		}
		.Cancellations {
			margin-top: 30px;
			width: 50%;
			.Title {
				text-align: left;
				font-weight: bold;
				font-size: 19px;
			}
			.Descr {
				font-weight: normal;
				font-size: 14px;
				line-height: 24px;
				color: $ColorDark2;
			}
		}
	}
	.RoomCalculator {
		width: 34%;
	}
	.Form {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.RoomInfoHeader {
			display: flex;
			flex: 1 0 auto;
			align-items: flex-end;
			justify-content: space-between;
			margin: 0 0 20px;
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
		.Arrival, .Departure {
			width: 45%;
			display: inline-block;
			font-weight: bold;
			font-size: 12px;
			text-transform: uppercase;
			
		}
		.Guests {
			width: 100%;
			margin: 10px 0px 20px;
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
			margin: 0px 0px 10px;
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
		.PriceItem {
			display: flex;
			flex: 1 0 auto;
			align-items: center;
			justify-content: space-between;
			margin: 10px 0 0px;
			.Item{ 
				font-size: 14px;
				color: $ColorDark2;
			}
			&.Total {
				.Item { 
					margin: 20px 0;
					&.Total {
						font-weight: bold;
						font-size: 19px;
					}
				}	
			}
		}
	}
	
	
	
</style>