const mongoose = require('mongoose');

const Offre =mongoose.model('Offre', {

    titre:{
        type: String,
        require:true,
        trim : true
    },
    description:{
        type: String,
        require:true,
        trim : true
    },
    prix: {
        type: String,
        require:true
    },
    type:{
        type: String,
        required: true,
        enum: ["PROMOTION", "REDUCTION", "BON_PLAN"]
    },
    image: {
        type: String, 
    },
    statut: {
        type: String,
        enum: ["ACTIF", "EXPIRÉ"], 
        default: "ACTIF",
      },
    id_fournisseur:{
        type: mongoose.Types.ObjectId,
        ref:"Utilisateur"
    }

})

//3eme etape export ll model
module.exports = Offre;