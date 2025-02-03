const mongoose = require('mongoose');

const Offre =mongoose.model('Offre', {

    titre:{
        type: String
    },
    description:{
        type: String
    },
    prix: {
        type: String
    },
    type:{
        type: String
    },
    id_fournisseur:{
        type: mongoose.Types.ObjectId,
                ref:"Utilisateur"
    }

})

//3eme etape export ll model
module.exports = Offre;