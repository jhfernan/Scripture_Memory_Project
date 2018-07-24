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
						<v-expansion-panel-content :key="i" ripple v-for="(topic, i) in pack.topics">
							<div class="title" slot="header">{{ topic.title }}</div>
							<v-container grid-list-lg>
								<v-layout justify-center row wrap>
									<v-flex :key="i" v-for="(verse, i) in topic.verses" xs12 md8 lg6>
										<v-card class="grey lighten-5" height="225px">
											<v-card-text v-if="stage[verse.number] < 1 || !stage[verse.number]">
												<v-layout align-center justify-center>
													<p class="title"><strong>{{ verse.number.toUpperCase() }}</strong></p>
												</v-layout>
											</v-card-text>
											<v-card-text v-if="stage[verse.reference] == 1">
												<div>
													<p><strong>{{ verse.reference }}</strong></p>
													<p>{{ verse.body['esv'] }}</p>
												</div>
											</v-card-text>
											<v-card-actions>
												<v-spacer></v-spacer>
												<v-btn color="deep-orange" @click="next(verse.reference)" dark>Explore</v-btn>
											</v-card-actions>
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
		let stage = {}
		if (!data) {
			error({ statusCode: 404, message: 'Pack not found' })
		}
		for (let i in data.topics) {
			for (let verse in data.topics[i].verses) {
				stage[data.topics[i].verses[verse].reference] = 0
			}
		}
		console.log(stage)
		return {
			pack: data,
			packName: params.pack,
			stage: stage
		}
	},
	methods: {
		next (number) {
			this.stage[number] += 1
		}
	}
}
</script>
