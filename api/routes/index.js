const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')
const orderRouter = require('./order.router')
const productRouter = require('./product.router')

router.use('/clients', clientRouter)
router.use('/accountManagers', accountManagerRouter)
router.use('/orders', orderRouter)
router.use('/products', productRouter)


module.exports = router
