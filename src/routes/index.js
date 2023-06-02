const userController = require("../controllers/user-controller");

const express = require('express');

const router = express.Router();


router.get('/user', userController.createUser);
router.post('/user', userController.getUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

module.exports = router;