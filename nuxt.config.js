module.exports = {
	// Headers of the page\
	head: {
		title: 'Project 314',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Project to master scripture memory' }
		],
		link: [
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://fonts.googleapis.com/css?family=Indie+Flower|Material+Icons|Montserrat|Roboto:300,400,500,700'
			},
		]
	},

	css: [
		'@/assets/style/app.styl',
	],

	loading: { color: '#B2DFDB' },

	plugins: [
		'~plugins/filters.js',
		'~/plugins/vuetify',
	],
	// Build configuration
	build: {
		// Run ESLint on save
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
