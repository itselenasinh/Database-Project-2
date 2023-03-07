const router = require('express').Router()

const {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

const { checkAuthAccountManager } = require('../utils')

router.get('/', getAllProducts)
router.get('/:id', getOneProduct)
router.post('/supplier/:supplierId', checkAuthAccountManager, createProduct)
router.put( '/:id', checkAuthAccountManager, updateProduct)
router.delete( '/:id', checkAuthAccountManager, deleteProduct)

module.exports = router