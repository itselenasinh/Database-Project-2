const router = require('express').Router()

const {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/order.controller')

router.get('/', getAllOrders)
router.post('/', createOrder)
router.put( '/:id', updateOrder)
router.delete( '/:id', deleteOrder)

module.exports = router