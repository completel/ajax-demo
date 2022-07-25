const express = require('express');

const app = express();

// 暴露静态资源
app.use(express.static(__dirname + '/src'));

app.get('/test_get', (request, response) => {
    console.log('有人请求了服务器');
    response.send('HELLO AJAX');
})

app.listen(8080, (err) => {
    if (!err) console.log('服务器启动成功啦~');
})