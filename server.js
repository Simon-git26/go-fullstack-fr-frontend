
//-----Pour tester/mettre en route le serveur, aller dans dossier backend et rentrer la commande node server et aller sur l'url : http://localhost:3000/ ------------
//---------Au lieu de node server on peut faire nodemon server puisque je les installer mais la ca marche pas-------------

// Importer le package http de node
const http = require('http');

// Crée un server grace a notre package qui prend en argument la fonction qui sera appelé par le server à chaque requette recu
const server = http.createServer((req, res) => {
    res.end('Voila la réponse du serveur si jai de la chance !');
});

// Ecouter/Attendre les requetes envoyés
server.listen(process.env.PORT || 3000);