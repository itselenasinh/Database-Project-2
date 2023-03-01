const router = require('express').Router()

const clientRouter = require('./client.router')
const accountManagerRouter = require('./accountManager.router')

router.use('/clients', clientRouter)
router.use('./accountManagers', accountManagerRouter)

module.exports = router
