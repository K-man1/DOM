const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Determine the file path
  let filePath = path.join(__dirname, req.url === '/' ? '/pi_verification.html' : req.url);
  const extname = path.extname(filePath);
  const contentType = extname === '.html' ? 'text/html' : 'text/plain';

  // Serve the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Listen on port 8000
server.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
