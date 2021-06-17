<template>
	<div v-if="result" class="Message">{{message}}</div>
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