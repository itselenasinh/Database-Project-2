const router = require('express').Router()

const clientRouter = require('./client.router')
const orderRouter = require('./order.router')


router.use('/clients', clientRouter)
router.use('/orders', orderRouter)


module.exports = router
