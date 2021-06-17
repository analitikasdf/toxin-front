<template>
	<div class="Container">
		<div class="Wrapp">
			<app-filter-rooms class="Filter"/>
			<app-rooms-list class="List"/>
		</div>
	</div>
</template>

<script>
import appRoomsList from '@/components/appRoomsList.vue'
import appFilterRooms from '@/components/appFilterRooms.vue'

export default {
	components: { appRoomsList, appFilterRooms },
		}
</script>

<style lang="scss" scoped>
	.Wrapp {
		display: flex;
		.Filter {
			width: calc((100%/4) * 1);
		}
		.List {
			width: calc((100%/4) * 3);
		}
		
	}
</style>