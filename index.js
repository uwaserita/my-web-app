const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a basic web app!');
});

server.listen(3000, () => {
  console.log('Hello, this is a basic web app!');
  console.log('Server running at http://localhost:3000');
});