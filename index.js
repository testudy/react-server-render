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

const configureStore = require('./app/store/index').default;
const Root = require('./app/container/Root').default;
const fetchData = require('./app/action/').fetchData;


const app = express();

require('./polyfills')(app);

app.set('views', './views')
app.engine('html', engines.hogan);

app.use(express.static('build', {index: false}));

const tangPoems = require('./data/tang-poems.json');

app.get('/api/table', function (req, res) {
    const table = tangPoems.data.map((poem, index) => ({
        id: index,
        title: poem.title
    }));
    res.type('json');
    res.send(JSON.stringify(table || []));
});

app.get('/api/:title', function (req, res) {
    console.log('/api/:title', req.params.title);

    const poem = tangPoems.data.find(poem => poem.title === String(req.params.title).trim());

    res.type('json');
    res.send(JSON.stringify(poem || {}));
});


app.get('/', function (req, res) {
    // 简单解决node-fetch host问题
    app.locals.host = req.headers.host;

    // store必须是fresh的，以避免前后请求间的干扰
    const store = configureStore();

    store.dispatch(fetchData()).then(() => {
        const props = store.getState();
        console.log(props);
        const html = ReactDOMServer.renderToString(React.createElement(Root, {
            store: store,
        }));
        res.render('index.html', { html: html, props: JSON.stringify(props) });
    });
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});
