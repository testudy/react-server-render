const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const html = 'hello';
    // 下面代码可以将渲染的结果直接输出，但不符合正式使用要求
    res.send(html);
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});
