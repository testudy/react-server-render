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

const express = require('express');
const ReactDOMServer = require('react-dom/server');
const App = require('./app/App.js').default;

const app = express();

app.get('/', function (req, res) {
    const data = {};
    const html = ReactDOMServer.renderToString(React.createElement(Home, data));
    // 下面代码可以将渲染的结果直接输出，但不符合正式使用要求
    res.send(html);
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});
