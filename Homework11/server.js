const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url === '/vote') {
        const now = new Date();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Your vote is accepted: ${now.toString()}`);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});