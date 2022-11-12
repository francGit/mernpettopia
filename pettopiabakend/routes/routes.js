const express = require('express')
const router = express.Router()
const user = require('../models/UserModel')
const pet = require('../models/PetModel')
const {createUser,editUser,deleteUser,getAllUsers} = require('../controllers/UserControllers')
const {createPet,editPet,deletePet,getAllPets} = require('../controllers/PetControllers')



router.get('/', (req,res) => {
    res.send('<div style="background: #45616e;color: #fff;font-family:sans-serif;min-height: 100vh;margin-left: -8px;margin-top: -8px;margin-right: -8px;margin-bottom: -8px;display: flex;justify-content: center;align-content: center;align-items: center;"> <h1>WELCOMEN TO API PETTOPIA</h1></div>')
    })

module.exports = router;