const {Router} = require('express')
const router = Router();
const controllers = require('../controllers')

router.post('/book', controllers.bookController.postBook)

router.get('/book/:id', controllers.bookController.getBook)

router.get('/all', controllers.bookController.getAll)

router.put('/book/update/:id', controllers.bookController.updateBook)

router.get('/:id/allBooks', controllers.bookController.getAuthorBooks)

module.exports = router;