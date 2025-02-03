const mongoose = require('mongoose');

const Utilisateur =mongoose.model('Utilisateur', {

    nom:{
        type: String
    },
    email:{
        type: String
    },
    mot_de_passe: {
        type: String
    },
    telephone:{
        type: String
    },
    role:{
        type: String
    },
    id_entreprise:{
        type: mongoose.Types.ObjectId,
                ref:"Entreprise"
    }

})

//3eme etape export ll model
module.exports = Utilisateur;