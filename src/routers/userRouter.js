const { Router } = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.post('/', userController.create);

router.use(validateToken);

router.get('/', userController.list);
router.get('/:id', userController.getById);

module.exports = router;
