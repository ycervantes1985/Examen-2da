const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator")

const CancionSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"],
        min:[4,"Debe colocar hasta 4 caracteres"],
        unique:true
    },
    tipo:{
        type:String,
        required:[true,"Debe colocar un tipo"],
        min:[4,"Debe colocar hasta 4 caracteres"]
    },
    descripcion:{
        type:String,
        required:[true,"la descripcion es obligatoria"],
        min:[4,"Debe colocar hasta 4 caracteres"]
    },
    compositores:{
        type:Array,
        required:[true,"Es necesario agregar un compositor"]
    },
    likes:{
        type:Number,
        default: 0
    }
    
},
{timestamps:true})

CancionSchema.plugin(uniqueValidator,{nombre:"Error, el nombre ya existe"});

const Cancion = mongoose.model("Cancion",CancionSchema);

module.exports = Cancion;