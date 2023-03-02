const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')
const orderRouter = require('./order.router')
<<<<<<< HEAD
const batchRouter = require('./batch.router')
=======
const supplierRouter = require('./supplier.router')
>>>>>>> Supplier

router.use('/clients', clientRouter)
router.use('/accountManagers', accountManagerRouter)
router.use('/orders', orderRouter)
<<<<<<< HEAD
router.use('/batches', batchRouter)

=======
router.use('/suppliers', supplierRouter)
>>>>>>> Supplier

module.exports = router
