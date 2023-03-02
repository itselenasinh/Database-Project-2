const router = require('express').Router()

const {
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/order.controller')

router.get('/', getAllOrders)
router.get( '/:id', getOneOrder)
router.post('/client/:clientId', createOrder)
router.put( '/:id', updateOrder)
router.delete( '/:id', deleteOrder)

module.exports = router