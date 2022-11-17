const Pet = require ("../models/pet.model")


module.exports.findAll = (req,res) => {
    Pet.find().sort({"tipo":1})
        .then((all)=>res.json({pets:all}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.create = (req,res) => {
    Pet.create(req.body)
        .then((newPet)=>res.json({message:"",pet:newPet}))
        .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}
module.exports.findOne = (req,res) => {
    Pet.findOne({_id: req.params.id})
        .then((pet)=>res.json({pet:pet}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.update = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then((pet)=>res.json({pet:pet}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.delete = (req,res) => {
    Pet.findOneAndDelete({_id: req.params.id})
        .then((pet)=>res.json({pet:pet}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}
