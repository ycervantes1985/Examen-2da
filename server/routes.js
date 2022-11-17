const PetController = require("./controllers/pet.controllers")


module.exports = app => {
    
    app.get("/api/pets",PetController.findAll);
    app.post("/api/pet/new",PetController.create);
    app.get("/api/pet/:id",PetController.findOne);
    app.put("/api/pet/:id",PetController.update);
    app.delete("/api/pet/:id",PetController.delete);
}