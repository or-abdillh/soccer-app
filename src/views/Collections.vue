<template>
	<Back />
	<main class="pt-16 pb-28">
		<h1 class="text-gray-50 text-xl font-medium">Your collections</h1>

		<section class="mt-4">
			<template v-for="list in collections.lists" :key="list">
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
