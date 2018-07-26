<template>
	<div>
		<v-carousel class="teal cb-full-screen" :cycle="false" hide-controls hide-delimiters :value="current">
			<v-carousel-item :key="i" v-for="(pack, key, i) in packs">
				<v-layout align-center class="teal" justify-center row wrap>
					<v-flex xs12 md4 lg3>
						<v-jumbotron dark gradient="to right, #00796B, #009688">
							<v-container fill-height>
								<v-layout align-center>
									<v-flex text-xs-center>
										<h3 class="display-3 text-capitalize">{{ key }} Pack</h3>
										<p class="display-1">{{ pack.title }}</p>
									</v-flex>
								</v-layout>
							</v-container>
						</v-jumbotron>
					</v-flex>
					<v-flex xs12 md8 lg9>
						<v-layout justify-center>
							<v-flex xs11 md10>
								<v-expansion-panel popout>
									<v-expansion-panel-content class="my-1" :key="i" ripple v-for="(topic, i) in pack.topics">
										<div class="title" slot="header">{{ topic.title }}</div>
										<v-container grid-list-lg>
											<v-layout justify-center row wrap>
												<v-flex :key="i" v-for="(verse, i) in topic.verses" xs12 md8 lg6>
													<transition name="fade" mode="out-in">
														<div @click="next(verse.reference)" key="number" v-if="stage[verse.reference] == 0">
															<v-card class="grey lighten-5" height="225px" hover>
																<v-layout align-center fill-height justify-center>
																	<div class="display-4 text-capitalize">{{ `${key}${verse.number}` }}</div>
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
					</v-flex>
				</v-layout>
			</v-carousel-item>
		</v-carousel>

		<v-navigation-drawer app clipped fixed mini-variant v-model="drawer">
			<v-list>
				<v-list-tile-action :key="link.name" v-for="link in links">
					<v-btn class="my-3" icon @click.stop="current = link.number">
						{{ link.name }}
					</v-btn>
				</v-list-tile-action>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	asyncData ({ app, params, error }) {
		return app.$axios.get('/info/tms/tms.json')
			.then(res => {
				let stage = {}
				let packs = res.data
				for (let pack in packs) {
					for (let i in packs[pack].topics) {
						for (let verse in packs[pack].topics[i].verses) {
							stage[packs[pack].topics[i].verses[verse].reference] = 0
						}
					}
				}
				return {
					packs: res.data,
					stage: stage
				}
			})
			.catch(err => {
				error({ statusCode: 404, message: 'TMS data not found' })
			})
	},
	data () {
		return {
			current: 0,
			drawer: true,
			links: [
				{ name: 'A', number: 0 },
				{ name: 'B', number: 1 },
				{ name: 'C', number: 2 },
				{ name: 'D', number: 3 },
				{ name: 'E', number: 4 }
			],
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
