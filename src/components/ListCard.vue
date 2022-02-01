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
    list: {
      type: Object
    }
  })
  
</script>

<template>
	<main @click="readMore(list)" class="active:scale-90 duration-300 border-b-2 border-slate-700 pb-5 mb-8">
	  <section class="w-full flex justify-between gap-2 items-start px-3 pt-2 mb-3">
	    <div class="w-5/12">
	      <img class="rounded-lg" :src="list.urlToImage"  />
	    </div>
	    <div class="w-6/12">
	      <p class="font-medium text-xs text-gray-100">
	        {{ list.title }}
	      </p>
	      <small class="text-gray-300 text-xs">By {{ list.author }} - {{ list.source.name }}</small>
	    </div> 
	  </section>
	  <p class="text-xs text-gray-100">{{ list.description.split('').splice(0, 100).join('') }}...</p>
  </main>
</template>
