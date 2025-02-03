const mongoose = require('mongoose');

const Reservation =mongoose.model('Reservation', {

    
    statut: {
        type: String,
        required
    },
    id_employe:{
        type: mongoose.Types.ObjectId,
        ref:"Utilisateur"
    },
    id_offre:{
        type: mongoose.Types.ObjectId,
        ref:"Offre"
    },
    date_reservation:{
        type: String
    }

})

module.exports = Reservation;