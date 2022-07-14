const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);

router.post('/', categoryController.create);
router.get('/', categoryController.list);

module.exports = router;
