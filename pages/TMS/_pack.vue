<template>
	<div>
		<v-parallax height="700" src="/images/home2.svg">
			<v-layout align-center column justify-center>
				<h1 class="display-3 mb-2 text-xs-center white--text">Project 314</h1>
				<div class="mb-3 text-xs-center title">The Scripture Memory App</div>
				<div>
					<v-btn class="mt-5" color="primary" dark large nuxt router to="/about">
						About Project 314
					</v-btn>
					<v-btn class="mt-5" color="white" dark large nuxt outline router to="/support">
						Support Us
					</v-btn>
				</div>
			</v-layout>
		</v-parallax>
	</div>
</template>

<script>
import info from '~/static/info/tms.json'

export default {
	asyncData ({ app, params, error }) {
		let data = info[params.pack.toLowerCase()]
		if (!data) {
			error({ statusCode: 404, message: 'Pack not found' })
		}
		return { pack: data }
	},
	data () {
		return {
			note: null,
		}
	},
}
</script>
