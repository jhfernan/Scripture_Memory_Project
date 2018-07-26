<template>
	<div>
		<v-jumbotron dark gradient="to right, #00796B, #009688" height="250px">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<h3 class="display-3 text-capitalize">About Us</h3>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
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
