const Order = require('../models/order.model')
const Client = require('../models/client.model')

async function getAllOrders(req, res) {
  try {
    console.log(req.headers)
    const orders = await Order.findAll()
    return !orders ? res.status(404).send('No orders found') : res.status(200).json(orders)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createOrder(req, res) {
    try {
      const order = await Order.create(req.body)
	const client = await Client.findByPk(req.params.clientId)
	  order.setClient(client)
      return res.status(200).json({ message: 'Order created', order: order })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

async function updateOrder(req, res) {
	try {
		const [orderExist, order] = await Order.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (orderExist !== 0) {
			return res.status(200).json({ message: 'Order updated', order: order })
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteOrder(req, res) {
	try {
		const order = await Order.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (order) {
			return res.status(200).json('Order deleted')
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
  }