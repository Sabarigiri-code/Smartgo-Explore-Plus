const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Strip query parameters before resolving file path
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = parsedUrl.pathname;  // already strips query string

    // Handle CORS headers for all requests
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle Preflight OPTIONS
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (pathname === '/api/send-otp' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const { identifier, generatedOtp } = JSON.parse(body);
                const SMS_API_KEY = "SLDC0zXbMQtFn9WpRa3rIgPi2OhG8AVyqHeJ56oUclYxs1v4Zja0b8wUJfK9WlRZ6ypHYA3c7DoI2mST";
                const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${SMS_API_KEY}&route=otp&variables_values=${generatedOtp}&numbers=${identifier}`;

                const https = require('https');
                https.get(url, (apiRes) => {
                    let data = '';
                    apiRes.on('data', chunk => { data += chunk; });
                    apiRes.on('end', () => {
                        const parsedData = JSON.parse(data);
                        // If Fast2SMS fails (e.g. status code 996 missing 'return: true'), pass the exact error back
                        if (parsedData.return !== true) {
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(data);
                        } else {
                            // Fast2SMS succeeded
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(data);
                        }
                    });
                }).on('error', (err) => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ return: false, message: err.message }));
                });
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ return: false, message: 'Invalid payload' }));
            }
        });
        return; // Don't proceed to static file serving
    }

    let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
        case '.png': contentType = 'image/png'; break;
        case '.jpg': contentType = 'image/jpg'; break;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT'){
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 8080;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
