<template>
	<v-app>
		<navbar />
		<v-content>
			<nuxt/>
		</v-content>
		<footie />
	</v-app>
</template>

<script>
import footie from '~/components/footer.vue'
import navbar from '~/components/navbar.vue'

export default {
	components: { footie, navbar }
}
</script>
