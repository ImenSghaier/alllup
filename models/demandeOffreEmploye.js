const mongoose = require('mongoose');

const DemandeOffreEmploye =mongoose.model('DemandeOffreEmploye', {

    
    
    statut: {
        type: String
    },
    contenue:{
        type: String
    },
    id_employe:{
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

module.exports = DemandeOffreEmploye;