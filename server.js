const express = require('express');

const app = express();
// 使用中间件解析urlencoded编码形式的请求体参数
app.use(express.urlencoded({ extended: true }));
// 使用中间件解析json编码形式的请求体参数
app.use(express.json());

// 暴露静态资源
app.use(express.static(__dirname + '/src'));

// 响应GET请求----可以接受query参数
app.get('/test_get', (request, response) => {
    console.log('有人请求了服务器，携带的query参数是：' + request.query);
    response.setHeader('Access-Control-Aloww-Origin', '*');
    response.send('HELLO AJAX');
})

// 响应GET请求----可以接受params参数
app.get('/test_get2/:name/:age', (request, response) => {
    console.log('有人请求了服务器，携带的params参数是：' + request.params);
    response.send('HELLO AJAX TWO');
})

app.post('/test_post', (request, response) => {
    console.log('有人请求了test_post了', request.body);
    response.send('HELLO POST');
})

app.listen(8080, (err) => {
    if (!err) console.log('服务器启动成功啦~');
})