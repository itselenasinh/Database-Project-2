const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')
const orderRouter = require('./order.router')
<<<<<<< HEAD
const batchRouter = require('./batch.router')
<<<<<<< HEAD
const productRouter = require('./product.router')
=======
=======
const supplierRouter = require('./supplier.router')
>>>>>>> Supplier
>>>>>>> 449a5fa1def6b1c9103fa1d838efe6883264057e

router.use('/clients', clientRouter)
router.use('/accountManagers', accountManagerRouter)
router.use('/orders', orderRouter)
<<<<<<< HEAD
router.use('/batches', batchRouter)
router.use('/products', productRouter)

=======
router.use('/suppliers', supplierRouter)
>>>>>>> Supplier

module.exports = router
