require("babel-register")({
    presets: ["es2015", "react-app"],

    // Optional ignore regex - if any filenames **do** match this regex then they
      // aren't compiled.
    ignore: /(.css|.less)$/,

    // Optional only regex - if any filenames **don't** match this regex then they
    // aren't compiled
    only: /app\/.*\.js/,

    // Setting this will remove the currently hooked extensions of .es6, `.es`, `.jsx`
    // and .js so you'll have to add them back if you want them to be used again.
    extensions: ['.js'],

    // Setting this to false will disable the cache.
    cache: true
});

require('ignore-styles');

const express = require('express');
const engines = require('consolidate');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = require('./app/component/App.js').default;

const app = express();

require('./polyfills')(app);

app.set('views', './views')
app.engine('html', engines.hogan);

app.use(express.static('build', {index: false}));

app.get('/api/desc', function (req, res) {
    res.send('desc react server render');
});

app.get('/', function (req, res) {
    // 简单解决node-fetch host问题
    app.locals.host = req.headers.host;

    fetch('/api/desc').then((resp) => {
        return resp.text();
    }).then((body) => {
        console.log(body);
        const props = {data: body};
        const html = ReactDOMServer.renderToString(React.createElement(App, props));
        res.render('index.html', { html: html, props: JSON.stringify(props) });
    });
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});
