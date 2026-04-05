const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Use dynamic port for deployment
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

    // Parse URL (remove query params)
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = parsedUrl.pathname;

    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // ================= OTP API =================
    if (pathname === '/api/send-otp' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { identifier, generatedOtp } = JSON.parse(body);

                // ⚠️ Move API key to env in production
                const SMS_API_KEY = process.env.SMS_API_KEY || "YOUR_API_KEY";

                const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${SMS_API_KEY}&route=otp&variables_values=${generatedOtp}&numbers=${identifier}`;

                https.get(url, (apiRes) => {
                    let data = '';

                    apiRes.on('data', chunk => {
                        data += chunk;
                    });

                    apiRes.on('end', () => {
                        try {
                            const parsedData = JSON.parse(data);

                            if (parsedData.return !== true) {
                                res.writeHead(500, { 'Content-Type': 'application/json' });
                                res.end(data);
                            } else {
                                res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.end(data);
                            }

                        } catch {
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ return: false, message: "Invalid API response" }));
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

        return;
    }

    // ================= STATIC FILES =================
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
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start server
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});