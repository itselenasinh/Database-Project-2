const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')
const orderRouter = require('./order.router')
const supplierRouter = require('./supplier.router')

router.use('/clients', clientRouter)
router.use('/accountManagers', accountManagerRouter)
router.use('/orders', orderRouter)
router.use('/suppliers', supplierRouter)

module.exports = router
