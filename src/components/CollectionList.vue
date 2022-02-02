<template>
	<main class="flex mb-5 gap-2">	
		<section @click="readMore()" class="w-full px-5 py-12 relative overflow-hidden rounded-l-lg active:scale-95 duration-300">
			<img :src="content.urlToImage" class="absolute -top-3/4 left-0 right-0" />
			<div class="absolute px-2 inset-0 grid place-items-center">
				<p class="text-gray-100 text-xs font-medium">{{ content.title }}</p>
			</div>
		</section>

		<div class="bg-green-600 w-1/12 grid place-items-center text-gray-100 rounded-r-lg">
			<i class="far fa-trash-alt"></i>
		</div>
	</main>
</template>

<style scoped>
	img {
		filter: brightness(.6);
	}
</style>

<script setup>

	import { useRouter } from 'vue-router'

	const router = useRouter()
	const readMore = () => {
		setTimeout(() => {
			router.push({
				name: 'Read',
				params: {
					content: JSON.stringify(props.content)
				}
			})
		}, 500)
	}

	const props = defineProps({
		content: {
			type: Object
		}
	})
	
</script>
