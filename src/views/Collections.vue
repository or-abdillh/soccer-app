<template>
	<Back />
	<main class="pt-16 pb-28">
		<h1 class="text-gray-50 mb-2 text-2xl font-medium">Your collections</h1>
		<p class="text-gray-200 text-sm">
			 You can adding new article with click 'Heart '
			<i class="far fa-heart text-green-500"></i>
			 button in the article preview
		</p>

		<section class="mt-8">
			<template v-for="list in collections.lists.reverse()" :key="list">
				<CollectionList :content="list" />
			</template>
		</section>
	</main>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import Back from '@/components/Back.vue'
	import CollectionList from '@/components/CollectionList.vue'

	const collections = ref(null)
	collections.value = JSON.parse(
		localStorage.getItem('$collections')
	)

</script>
