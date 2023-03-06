const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')
const orderRouter = require('./order.router')
const batchRouter = require('./batch.router')
const productRouter = require('./product.router')
const supplierRouter = require('./supplier.router')

router.use('/clients', clientRouter)
router.use('/accountManagers', accountManagerRouter)
router.use('/orders', orderRouter)
router.use('/batches', batchRouter)
router.use('/products', productRouter)
router.use('/suppliers', supplierRouter)

module.exports = router
