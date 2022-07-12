const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.get('/search',controller.getAllUsers);
router.post('/',controller.addUser);
router.put('/:id',controller.updateUser);
router.delete('/:id',controller.deleteUser);

module.exports = router;

// {
//     "firstName": "shir",
//     "lastName": "Bir",
//     "address":"rrr",
//     "phone": "055671965",
//     "email":"sh@gmail.com",
//     "hight":1.67,
//     "weight":67,
//     "mealsDairy":[]

// }