const mongoose = require('mongoose');

const Entreprise =mongoose.model('Entreprise', {

    nom:{
        type: String,
        require : true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    telephone:{
        type: String,
        required: true,
        match: [/^\+?[0-9]{7,15}$/, "Invalid phone number format"]  
    }

})

module.exports = Entreprise;