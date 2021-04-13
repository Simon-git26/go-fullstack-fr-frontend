// Importer Mongoose
const mongoose = require('mongoose');

// Crée notre schéma de donnée avec toutes les infos dont nos objets ont besoin (a partir de nos objets du tableau [stuff])
//Pas besoin de mettre le champ id car il est automatique genéré par mongoose
const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
});


//On a notre schéma, mais pour l'instant on ne peut pas l'exploitier comme models, donc il faut exporter le models terminer
module.exports = mongoose.model('Thing', thingSchema);
