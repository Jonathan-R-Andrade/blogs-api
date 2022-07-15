const { Router } = require('express');
const blogPostController = require('../controllers/blogPostController');
const validateToken = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);

router.post('/', blogPostController.create);
router.get('/', blogPostController.list);
router.get('/search', blogPostController.getBySearchTerm);
router.get('/:id', blogPostController.getById);
router.put('/:id', blogPostController.update);
router.delete('/:id', blogPostController.delete);

module.exports = router;
