const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index2.html' : req.url);
    const ext = path.extname(filePath);

    const contentType = {
        '.html': 'text/html',
        '.json': 'application/json'
    }[ext] || 'text/plain';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Файл не знайдено');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(5000, () => {
    console.log('Сервер працює: http://localhost:5000');
});