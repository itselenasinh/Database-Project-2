const router = require('express').Router()

const {
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/order.controller')

const { checkAuthAccountManager } = require('../utils')

router.get('/', checkAuthAccountManager, getAllOrders)
router.get( '/:id', checkAuthAccountManager, getOneOrder)
router.post('/client/:clientId', createOrder)
router.put( '/:id', checkAuthAccountManager, updateOrder)
router.delete( '/:id', checkAuthAccountManager, deleteOrder)

module.exports = router