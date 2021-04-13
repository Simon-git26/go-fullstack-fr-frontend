
//-----Pour tester/mettre en route le serveur, aller dans dossier backend et rentrer la commande nodemon server et aller sur l'url : http://localhost:3000/ ------------

// Importer le package http de node
const http = require('http');

// Importer notre application
const app = require('./app');




// La fonction normalizePort renvoi un port valide, qu'il soit fourni sous la forme d'un numéros ou d'une chaine
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
  
const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
};
  
const server = http.createServer(app);

// La fonction errorHandler recherche les différentes erreurs et les gere de maniere approprié, elle est ensuite enrregistrer dans le serveur
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});
  
server.listen(port);
