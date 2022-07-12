const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.get('/search',controller.getAllUsers);
router.post('/',controller.addUser);
router.put('/:id',controller.updateUser);
router.delete('/:id',controller.deleteUser);

module.exports = router;
