const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')
const orderRouter = require('./order.router')
<<<<<<<<< Temporary merge branch 1
const batchRouter = require('./batch.router')
=========
const supplierRouter = require('./supplier.router')
>>>>>>>>> Temporary merge branch 2

router.use('/clients', clientRouter)
router.use('/accountManagers', accountManagerRouter)
router.use('/orders', orderRouter)
<<<<<<<<< Temporary merge branch 1
router.use('/batches', batchRouter)

=========
router.use('/suppliers', supplierRouter)
>>>>>>>>> Temporary merge branch 2

module.exports = router
