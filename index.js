const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/contact') {
    res.end('Contact Page\n');
  } else {
    res.end('Hello, this is a basic web app!');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});