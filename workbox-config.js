module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,png,json,eot,svg,ttf,woff,woff2,jpg,jpeg,gif,db,js,txt,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};