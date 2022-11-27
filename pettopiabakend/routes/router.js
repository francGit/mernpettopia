const express = require("express");
const router = express.Router();
const {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
  getUser,
  userLogin,
} = require("../controllers/UserController");
const {
  createPet,
  editPet,
  deletePet,
  getAllPets,
  getPet,
} = require("../controllers/PetController");

//Ruta de prueba
router.get("/", (req, res) => {
  res.send("<h1>Hello World!!!! My First API Rest</h1>");
});

//Operaciones CRUD Usuario
router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);
router.put("/update-user/:id", editUser);
router.get("/getUser/:id", getUser);
router.delete("/delete-user/:id", deleteUser);
//Ruta para el login de usuario
router.post("/login", userLogin);

//Operaciones CRUD Pet
router.post("/createPet", createPet);
router.get("/getAllPets", getAllPets);
router.get("/getPet/:id", getPet);
router.put("/update-pet/:id", editPet);
router.delete("/delete-pet/:id", deletePet);

module.exports = router;
