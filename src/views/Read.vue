<script setup>
	import { useRoute } from 'vue-router'

	const route = useRoute()
</script>

<template>
	<pre class="text-gray-50">
		{{ route }}
	</pre>
</template>
