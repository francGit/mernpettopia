const express = require('express')
const router = express.Router()
const { createUser, editUser, deleteUser, getAllUsers, userLogin } = require ('../controllers/UserController')

//Ruta de prueba
router.get("/", (req, res) => {
  res.send("<h1>Hello World!!!! My First API Rest</h1>");
});

//Operaciones CRUD Usuario
router.post("/createUser", createUser );
router.get("/getAllUsers", getAllUsers); 
router.put("/update-user/:id", editUser);
router.delete("/delete-user/:id", deleteUser);

//Ruta para el login de usuario...ToDo
router.post('/login', userLogin)

module.exports = router
