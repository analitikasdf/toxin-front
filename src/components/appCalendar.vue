<template>
	<form class="Main">
		<div class="Title">Найдём номера под ваши пожелания</div>
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
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		toRooms() {
			this.$router.push('/searchRoom')
		}
	}
}
</script>

<style lang="scss" scoped>
	.Main {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 40px 30px;
		position: absolute;
		left: 140px;
		top: 140px;
		width: 380px;
		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.12);
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
		border-radius: 4px;	
	}
	.Title {
		text-align: left;
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