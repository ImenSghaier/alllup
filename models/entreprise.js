const mongoose = require('mongoose');

const Entreprise =mongoose.model('Entreprise', {

    nom:{
        type: String
    },
    email:{
        type: String
    },
    telephone:{
        type: String
    }

})

module.exports = Entreprise;