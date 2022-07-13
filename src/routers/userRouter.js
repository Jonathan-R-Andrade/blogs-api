const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/', userController.create);
router.get('/', userController.list);
router.get('/:id', userController.getById);

module.exports = router;
