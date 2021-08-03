<template>
	<div class="Filter">
		<h3 class="Title">Даты пребывания в отеле</h3>
		<input type="date" class="Input">
		<input type="date" class="Input">
		<h3>гости</h3>
		<input type="number" class="Input" v-model="guests">
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
		<button
			class="Button"
			@click="hendlerFilter"
			>подобрать
		</button>
	</div>
</template>

<script>
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

export default {
	components: {
		Slider,
	},
	emits: {
		minValue: null,
		maxValue: null,
	},
	props: {
		roomsPriceMax: null,
		roomsPriceMin: null,
	},
	data () {
		return {
			value: [0, 30000],
			tooltips: false,
			guests: 1
		}
	},
	methods: {
		hendlerFilter() {
			const item = {}
			item.min = this.value[0]
			item.max = this.value[1]
			item.guests = this.guests
			this.$store.dispatch('roomsLoad', item)
			console.log(item);
		}
	},
	computed: {
		sliderMinValue() {
			return this.value[0].toLocaleString()
		},
		sliderMaxValue() {
			return this.value[1].toLocaleString()
		}
	},
	
	watch: {
		sliderMinValue() {
			this.$emit('minValue', this.value[0]);

		},
		sliderMaxValue() {
			this.$emit('maxValue', this.value[1]);

		}
	},
	mounted() {
		this.hendlerFilter()	
	}
}
</script>

<style lang="scss">
	.Filter	{
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
	@media (min-width: $MobileMini) and (max-width: calc(#{$Mobile} - 0.02px)) {
		.Filter {
			display: none;
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