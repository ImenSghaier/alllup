const mongoose = require('mongoose');

const Contract =mongoose.model('Contract', {

    
    
    statut: {
        type: String
    },
    clause:{
        type: String
    },
    id_fournisseur:{
        type: mongoose.Types.ObjectId,
                ref:"Utilisateur"
    },
    id_offre:{
        type: mongoose.Types.ObjectId,
                ref:"Offre"
    },
    id_entreprise:{
        type: mongoose.Types.ObjectId,
                ref:"Entreprise"
    }

})

module.exports = Contract;