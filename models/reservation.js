const mongoose = require('mongoose');

const Reservation =mongoose.model('Reservation', {

    
    statut: {
        type: String,
        required:true,
        enum: ["EN_ATTENTE", "CONFIRMÉE", "ANNULÉE"],
    },
    id_employe:{
        type: mongoose.Types.ObjectId,
        ref:"Utilisateur",
        require:true
    },
    id_offre:{
        type: mongoose.Types.ObjectId,
        ref:"Offre",
        require:true
    },
    date_reservation:{
        type : Date,
        default: Date.now,
        require:true
    }

})

module.exports = Reservation;