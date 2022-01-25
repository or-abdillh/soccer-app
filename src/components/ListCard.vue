<script setup>
  
  defineProps({
    list: {
      type: Object
    }
  })
  
</script>

<template>
  <section class="w-full border-b-2 border-slate-700 flex justify-between gap-2 items-start px-3 pt-2 pb-5 mb-3">
    <div class="w-5/12">
      <img class="rounded-lg" :src="list.imageUrl"  />
    </div>
    <div class="w-6/12">
      <p class="text-sm text-gray-100">
        {{ list.title }}
      </p>
      <small class="text-gray-300">By {{ list.creator.join(' ') }}</small>
    </div> 
  </section>
</template>