const mongoose = require('mongoose');

const Contract =mongoose.model('Contract', {

    

    statut: {
        type: String,
        enum: ["EN_ATTENTE", "ACTIF", "EXPIRÉ", "ANNULÉ"],
        required: true,
    },
    clause: {
        type: String,
        required: true,
        trim: true,
    },
    date_debut: {
        type: Date,
        required: true,
    },
    date_fin: {
        type: Date,
        required: true,
        validate: {
          validator: function (value) {
            return value > this.date_debut;
          },
          message: "La date de fin doit être après la date de début",
        }
    },
    signature_fournisseur: {
        type: Boolean,
        default: false,
    },
    signature_entreprise: {
        type: Boolean,
        default: false,
    },
    date_creation:{
        type: Date,
        default: Date.now
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