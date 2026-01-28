const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Requête reçue à ${new Date().toISOString()}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Knative ! (v0.1.0)\n');
});

server.listen(8080, () => {
  console.log('Serveur en écoute sur le port 8080');
});