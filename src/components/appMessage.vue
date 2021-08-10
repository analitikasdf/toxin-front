<template>
	<div v-if="result" class="Message">
		<span>{{message}}</span>
		<div class="CloseModal">xvsvsA</div>
	</div>
	
</template>

<script>
export default {
	data() {
		return {
			logIn: 'Добро пожаловать',
			error: 'Произошла ошибка',
		}
	},
	computed: {
		message() {
			
		}
	}
}

</script>

<style>

</style>