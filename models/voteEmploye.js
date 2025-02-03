const mongoose = require('mongoose');

const VoteEmploye =mongoose.model('VoteEmploye', {

    commantaire:{
        type: String
    },
    vote:{
        type: String
    },
    id_offre:{
        type: mongoose.Types.ObjectId,
                ref:"Offre"
    },
    id_employe:{
        type: mongoose.Types.ObjectId,
                ref:"Utilisateur"
    }

})

module.exports = VoteEmploye;