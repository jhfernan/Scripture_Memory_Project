import Vue from 'vue'

// Date Filters
let longOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }

Vue.filter('shortDate', val => new Date(val).toLocaleDateString())
Vue.filter('longDateTime', val => new Date(val).toLocaleDateString('en-US', longOptions))

Vue.filter('prettyPhone', val => {
	if (val.length === 10) {
		let numLen = val.length
		let newStart = '(' + val.substring(0,numLen-7) + ')'
		newStart += ' ' + val.substring(numLen-7,numLen-4)
		newStart += '-' + val.substring(numLen-4,numLen)
		return newStart
	} else {
		return val
	}
})
