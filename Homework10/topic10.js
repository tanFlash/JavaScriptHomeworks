//Task 1

const http = require('http');
const os = require('os');
const path = require('path');
const personalModule = require('./personalmodule.js');
const currentTime = new Date();

function getSystemInfo(){
    const username = os.userInfo().username;
    const osType = os.type();
    const systemWork = Math.floor(os.uptime() / 60);
    const directory = __dirname;
    const serverFile = path.basename(__filename);

    return `
    <html>
            <head>
                <title>System Info</title>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>System Information</h1>
                <ul>
                    <li>Current user name: ${username}</li>
                    <li>OS Type:${osType}</li>
                    <li>System work time: ${systemWork} minutes</li>
                    <li>Current work directory: ${directory}</li>
                    <li>Server file name: ${serverFile}</li>
                    <li>Server file name: ${serverFile}</li>
                    <li>Date of request: ${currentTime}</li>
                    <li>${personalModule.greetUser(os.userInfo().username)}</li>
                </ul>
            </body>
        </html>
    `;
}


http.createServer((request, response)=>{
    const html = getSystemInfo();
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
}).listen(5000);

console.log("Server is listening on http://localhost:5000/");