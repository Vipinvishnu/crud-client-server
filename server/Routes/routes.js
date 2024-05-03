
const userController = require('../controllers/userController');
const express = require('express');
const route = express.Router();

route.post("/create", userController.create);
route.get('/getall',userController.getAll)
route.get('/getone/:id',userController.getOne)
route.put('/update/:id',userController.update)
route.delete('/deleteuser/:id',userController.deleteUser)
module.exports = route;
