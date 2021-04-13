
// Importer Express
const express = require('express');

//Importer Mongoose
const mongoose = require('mongoose');

// Utilisez la methode express pour crée l'application
const app = express();

// Connection de mon API vers MongoDB !
mongoose.connect('mongodb+srv://Simon:Lamotodu26.@cluster0.6mtmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));



//Importer body-parser
const bodyParser = require('body-parser');


//---------------------Les Middleware----------------------------
// On veut que tout le monde puisse accédeer a notre API donc on va rajouter des header a notre réponse pour dire ok tout le monde peut y accéder sans probleme
//ceci est un midleware general donc pas besoin de mettre une route, il sera appliqué a toute les requetes de notre serveur
app.use((req, res, next) => {
    // Ligne 14, on dit que l'Origni qui a le droit d'acceder à notre API c'est tout le monde grace a "*"
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Ligne 16,17 on donne l'autorisation d'utiliser certain certain entete et des methode post put etc
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    //Appeler next pour passer l'execution au midleware d'apres
    next();
});


//Un midleware qui va utlisez une méthode de body-parser qui va permettre de transformer le corp de la requete en json (objet javascript utilisable)
app.use(express.json());

//Traiter différement les requetes POST (donc par exemple le bouton vendre de la partie vendre un objet) Crée un nouveau Middleware
app.post('/api/stuff', (req, res, next) => {
    //Traiter les données qui sont associé a la requete
    console.log(req.body);
    res.status(201).json({
        message: 'Objet crée !'
    });
});


// Utilsea app.use MAIS rajouter un argument sous forme de string qui sera l'url visé par l'application(endpoint)
app.use('/api/stuff', (req, res, next) => {

    //Crée 2 objet dans le tableau appelé stuff
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    //Ce Midleware attribut un code 200 a la réponde donc une réponse réussi, et renvoi en reponse.json le tableau stuff avec les objets dedans !
    res.status(200).json(stuff);
});



// Exporter cette application
module.exports = app;