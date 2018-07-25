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
										<transition name="fade" mode="out-in">
											<div @click="next(verse.reference)" key="number" v-if="stage[verse.reference] == 0">
												<v-card class="grey lighten-5" height="225px" hover>
													<v-layout align-center fill-height justify-center>
														<div class="display-4">{{ `${packName}${verse.number}` }}</div>
													</v-layout>
												</v-card>
											</div>
											<div @click="next(verse.reference)" key="reference" v-if="stage[verse.reference] == 1">
												<v-card class="grey lighten-5" height="225px" hover>
													<v-layout align-center fill-height justify-center>
														<div class="title"><strong>{{ verse.reference }}</strong></div>
													</v-layout>
												</v-card>
											</div>
											<div @click="reset(verse.reference)" key="body" v-if="stage[verse.reference] == 2">
												<v-card class="grey lighten-5" height="225px" hover>
													<v-layout>
														<div class="px-4 py-3">
															<v-layout row wrap>
																<v-flex xs6>
																	<strong>{{ verse.reference }}</strong>
																</v-flex>
																<v-flex xs6>
																	<div class="text-xs-right text-uppercase">{{ version }}</div>
																</v-flex>
															</v-layout>
															<p>
																<span :key="item.ref" v-for="item in verse.body">
																	<strong class="ml-1">{{ item.ref }}</strong> {{ item[version] }}
																</span>
															</p>
														</div>
													</v-layout>
												</v-card>
											</div>
										</transition>
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
		return {
			pack: data,
			packName: params.pack,
			stage: stage
		}
	},
	data () {
		return {
			version: 'esv',
		}
	},
	methods: {
		next (number) {
			this.stage[number] += 1
		},
		reset (number) {
			this.stage[number] = 0
		},
	}
}
</script>
