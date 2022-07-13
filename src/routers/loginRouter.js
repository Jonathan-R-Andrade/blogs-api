const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.checkLoginData);

module.exports = router;
