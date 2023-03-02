const router = require('express').Router()

const {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

router.get('/', getAllProducts)
router.get('/:id', getOneProduct)
router.post('/supplier/:supplierId', createProduct)
router.put( '/:id', updateProduct)
router.delete( '/:id', deleteProduct)

module.exports = router