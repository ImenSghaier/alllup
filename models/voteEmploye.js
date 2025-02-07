const mongoose = require('mongoose');

const VoteEmploye =mongoose.model('VoteEmploye', {

    commantaire:{
        type: String,
        require: false,
        lowercase: true
    },
    vote:{
        type: Number,
        min: 1, 
        max: 5, 
        require: false
    },
    id_offre:{
        type: mongoose.Types.ObjectId,
        ref:"Offre",
        require:true
    },
    id_employe:{
        type: mongoose.Types.ObjectId,
        ref:"Utilisateur",
        require:true
    }

})

module.exports = VoteEmploye;