<script setup>
	import { useRouter } from 'vue-router'

	const router = useRouter()
	const back = () => {
		setTimeout(() => {
			router.go(-1)
		}, 500)
	}
</script>

<template>
	<section class="fixed top-0 left-0 right-0 p-5">
		<div class="w-full px-5 md:w-8/12 lg:w-4/12 xl:w-3/12 md: 10/12 lg:4/12 xl:3/12 mx-auto">
			<p @click="back" class="text-green-400 text-xl font-medium active:scale-90 duration-300 pointer">
				<i class="fa fa-chevron-left mr-1"></i>
				Back
			</p>
		</div>
	</section>
</template>
