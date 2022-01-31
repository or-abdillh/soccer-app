<script setup>  
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const readMore = content => {
		setTimeout(() => {
			router.push({
				name: 'Read',
				params: {
					content: JSON.stringify(content)
				}
			})
		}, 500)
	}
	
  defineProps({
    content: {
      type: Object
    }
  })
</script>

<template>
	<section @click="readMore(content)" class="relative active:scale-75 pointer duration-300">
		<img :src="content.urlToImage" class="w-full rounded-xl"/>
		<div class="absolute inset-0 px-4 py-3 text-gray-50 flex justify-center flex-col">
			<h1 class="font-medium mb-3">{{ content.title }}</h1>
			<small class="text-gray-200">
				<i class="fa fa-user mr-1"></i>
				{{ content.author }}
			</small>
			<small class="text-gray-200">
				<i class="fa fa-clock mr-1"></i>
				{{ new Date(content.publishedAt).toLocaleString('id') }}
			</small>
		</div>
	</section>
</template>

<style scoped>
  
  img {
    filter: opacity(.45) brightness(.8);
  }
  
</style>
