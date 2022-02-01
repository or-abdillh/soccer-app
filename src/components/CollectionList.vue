<template>
	<main class="w-full px-5 py-14 relative overflow-hidden mb-2 rounded-lg">
		<img :src="content.urlToImage" class="absolute -top-3/4 left-0 right-0" />
		<div class="absolute px-2 inset-0 grid place-items-center">
			<p class="text-gray-100 text-xs font-medium">{{ content.title }}</p>
		</div>
	</main>
</template>

<style scoped>
	img {
		filter: brightness(.6);
	}
</style>

<script setup>

	defineProps({
		content: {
			type: Object
		}
	})
	
</script>
