// polyfills

const realFetch = require('node-fetch');
let localApp = null;

function fetch(url, options) {
    let host = localApp && localApp.locals.host || '';

	if (!/^https?:\/\//.test(url)) {
		url = 'http://' + host + url;
	}
    console.log('fetch', url);
	return realFetch.call(this, url, options);
};

module.exports = function(app) {
    localApp = app;
    if (!global.fetch) {
	    global.fetch = fetch;
    }
};
