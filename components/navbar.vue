<template>
	<div>
		<v-toolbar app class="white px-3" dense light :clipped-right="clipped" fixed>
			<v-toolbar-title>314 Proverbs</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn class="hidden-md-and-down" color="primary" exact flat :key="link.name" nuxt router :to="link.to" v-for="link in links">
				{{ link.name }}
			</v-btn>
			<!-- <template>
				<v-menu offset-y>
					<v-btn slot="activator" color="primary" flat>TMS Packs</v-btn>
					<v-list>
						<v-list-tile exact :key="link.name" nuxt router :to="link.to" v-for="link in itemLinks">
							<v-list-tile-title>{{ link.name }}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
			</template> -->
			<v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="drawer = !drawer" />
		</v-toolbar>
		<v-navigation-drawer app class="hidden-lg-and-up" :clipped="clipped" fixed right v-model="drawer">
			<v-list>
				<v-list-tile exact :key="link.name" nuxt router :to="link.to" v-for="link in links">
					<v-list-tile-title>{{ link.name }}</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			clipped: true,
			drawer: false,
			itemLinks: [
				{ name: 'A Pack', to: '/TMS/A' },
				{ name: 'B Pack', to: '/TMS/B' },
				{ name: 'C Pack', to: '/TMS/C' },
				{ name: 'D Pack', to: '/TMS/D' },
				{ name: 'E Pack', to: '/TMS/E' }
			],
			links: [
				{ name: 'Home', to: '/' },
				{ name: 'About', to: '/about' },
				{ name: 'TMS', to: '/tms' },
			],
		}
	}
}
</script>
