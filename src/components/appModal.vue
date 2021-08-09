<template>
	<div class="Modal">
		<div class="Message">
			Добро пожаловать
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.Modal {
		padding: 10px;
		position: absolute;
		top:100px;
		left:50%;
		transform:translate(-50%, -50%);
		border-radius: 4px;
		box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
		background-color: #fff;
	}
</style>