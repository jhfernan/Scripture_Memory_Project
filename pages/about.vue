<template>
	<div>
		<v-parallax height="700" src="/images/child_bible.jpg">
			<v-layout align-center class="white--text" column justify-center>
				<h1 class="display-3 mb-2 text-xs-center white--text">Project 314</h1>
				<div class="mb-3 text-xs-center title">An app for scripture memory</div>
				<div>
					<v-btn class="mt-5" color="primary" dark large nuxt router to="/about">
						About The Project
					</v-btn>
					<v-btn class="mt-5" color="white" dark large nuxt outline router to="/quote">
						Request a Quote
					</v-btn>
				</div>
			</v-layout>
		</v-parallax>
	</div>
</template>

<script>
export default {
	data () {
		return {
			note: null,
		}
	},
	head () {
		return {
			title: 'About Project 314',
		}
	},
}
</script>
