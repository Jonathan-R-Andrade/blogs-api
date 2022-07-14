const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const router = Router();

router.post('/', categoryController.create);

module.exports = router;
