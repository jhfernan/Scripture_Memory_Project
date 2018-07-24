<template>
	<div>
		<v-jumbotron dark gradient="to right, #00796B, #009688" height="250px">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<h3 class="display-3">{{ packName }} Pack</h3>
						<p class="display-1">{{ pack.title }}</p>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>

		<v-container class="py-5">
			<v-layout justify-center>
				<v-flex xs11 sm10 md9 lg8>
					<v-expansion-panel popout>
						<v-expansion-panel-content ripple v-for="(topic, i) in pack.topics" :key="i">
							<div class="title" slot="header">{{ topic.title }}</div>
							<v-container grid-list-lg>
								<v-layout justify-center row wrap>
									<v-flex :key="i" v-for="(verse, i) in topic.verses" xs12 md8 lg6>
										<v-card class="grey lighten-3">
											<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
										</v-card>
									</v-flex>
								</v-layout>
							</v-container>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-flex>
			</v-layout>
		</v-container>

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
		return {
			pack: data,
			packName: params.pack
		}
	},
	data () {
		return {
			note: null,
		}
	},
}
</script>
