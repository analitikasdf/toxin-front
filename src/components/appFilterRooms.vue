<template>
	<div class="Filter">
		<h3>даты пребывания в отеле</h3>
		<input type="date" class="Input">
		<input type="date" class="Input">
		<h3>гости</h3>
		<input type="number" class="Input">
		<h3 class="SliderTitle">диапазон цены</h3>
		<div class="Wrapp">
			<div class="MinVal">{{sliderMinValue}}&#8381;</div>
			-
			<div class="MaxVal">{{sliderMaxValue}}&#8381;</div>
		</div>
		<Slider
			class="Slider"
			v-model="value"
			:tooltips="tooltips"
			:max="30000"
		/>
		<h3>правила дома</h3>
		<h3>доступность</h3>
		<h3>удобства номера</h3>
		<h3>дополнительные удобства</h3>
	</div>
</template>

<script>
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

export default {
	components: {
		Slider,
	},
	data () {
		return {
			value: [0, 30000],
			tooltips: false,
		}
	},
	computed: {
		log() {
			return this.value;
		},
		sliderMinValue() {
			return this.value[0].toLocaleString()
		},
		sliderMaxValue() {
			return this.value[1].toLocaleString()
		}
	},
}
</script>

<style lang="scss">
	.Filter	{
		padding: 20px;
		.SliderTitle {
			display: inline-block;
			width: 50%;
		}
		.Wrapp {
			width: 50%;
			display: inline-flex;
			align-items: center;
			justify-content: flex-end;
		}
		.MinVal, .MaxVal {
			padding: 0 5px;
			font-size: 12px;
			color: $ColorDark3;
		}
	}
</style>