<script setup>  
  defineProps({
    content: {
      type: Object
    }
  })
</script>

<template>
	<section class="relative">
		<img :src="content.imageUrl" class="w-full rounded-xl"/>
	 	<div class="absolute inset-0 px-4 py-3 text-gray-50 flex justify-center flex-col">
			<h1 class="font-medium mb-3">{{ content.title }}</h1>
			<small class="text-gray-200">
				<i class="fa fa-user mr-1"></i>
				{{ content.creator.join(' | ') }}
			</small>
			<small class="text-gray-200">
				<i class="fa fa-clock mr-1"></i>
				{{ content.pubDate }}
			</small>
	 </div>
 </section>
</template>

<style scoped>
  
  img {
    filter: opacity(.45) brightness(.8);
  }
  
</style>
