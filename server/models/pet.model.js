const mongoose = require("mongoose");



const PetSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        min:[3,"Debe colocar hasta 3 caracteres"],
        
    },
    tipo:{
        type:String,
        required:[true,"Debe colocar un tipo"],
        min:[3,"Debe colocar hasta 3 caracteres"]
    },
    descripcion:{
        type:String,
        required:[true,"la descripcion es obligatoria"],
        min:[3,"Debe colocar hasta 3 caracteres"]
    },
    skills:{
        type:Array,
        required:[true,"Es necesario agregar un compositor"]
    },
    likes:{
        type:Number,
        default: 0
    }
    
},
{timestamps:true})

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;