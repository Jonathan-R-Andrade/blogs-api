const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const router = Router();

router.post('/', categoryController.create);
router.get('/', categoryController.list);

module.exports = router;
