<script setup>
	import { useRoute } from 'vue-router'
	import { computed, ref } from 'vue'
	import Back from '@/components/Back.vue'
	
	const route = useRoute()
	const content = computed(() => JSON.parse(route.params.content))

	const isButtonClick = ref(false)
	
	const save = item => {
		isButtonClick.value = !isButtonClick.value
		
		const collections = JSON.parse(
			localStorage.getItem('$collections')
		)

		if ( collections.lists.filter(list => list.title === item.title).length === 0 ) {
			collections.lists.push(item)
		}
		
		localStorage.setItem('$collections', JSON.stringify(collections))
	}
</script>

<template>
	<Back />
	<main class="mt-5 pt-12 pb-28">
		<small class="text-gray-200 mb-8 inline-block border-b border-slate-500  w-full pb-4">
			{{ content.source.name }}
			<br />
			{{ content.author }}
		</small>
		
		<img :src="content.urlToImage" class="w-full mb-10 rounded-xl" />
		<h1 class="text-gray-50 text-3xl mb-5 font-medium">{{ content.title }}</h1>
		<p class="text-gray-50 text-base">{{ content.content.split('[')[0] }}</p>

		<section class="fixed bottom-0 left-0 right-0 px-5 py-8 bg-dark-gray">
			<div class="w-full md:w-8/12 lg:w-4/12 xl:w-3/12 mx-auto flex gap-2 justify-between">
				<a :href="content.url" class="w-10/12 bg-green-500 text-gray-100 block hover:bg-opacity-75 active:scale-90 duration-300 text-center text-xl font-medium py-2 rounded">Read more</a>
				
				<button @click="save(content)" class="mini-button">
					<i :class="isButtonClick ? 'fas' : 'far'" class="fa-heart"></i>
				</button>
				
				<button class="mini-button">
					<i class="fas fa-share-alt"></i>
				</button>
			</div>
		</section>
	</main>
</template>

<style scoped>

	.mini-button {
		@apply w-2/12 border-2 border-green-500 rounded py-2 text-xl text-center duration-300 text-green-500;
	}

</style>
