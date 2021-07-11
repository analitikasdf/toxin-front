<template>
	<div class="Filter">
		<h3>даты пребывания в отеле</h3>
		<input type="date" class="Input">
		<input type="date" class="Input">
		<h3>гости</h3>
		<input type="number" class="Input">
		<h3>диапазон цены</h3>
		<Slider v-model="value" />
		<h3>правила дома</h3>
		<h3>доступность</h3>
		<h3>удобства номера</h3>
		<h3>дополнительные удобства</h3>
		<div class="log">{{log}}</div>
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
			value: [20, 40]
		}
	},
	computed: {
		log() {
			return this.value;
		}
	}
}
</script>

<style lang="scss">
	.Filter	{
		padding: 20px;
	}
	.slider-connect {

	}
</style>