const Order = require('../models/order.model')
const Client = require('../models/client.model')
const Product_Order = require('../models/product_order.model')

async function getAllOrders(req, res) {
	try {
		console.log(req.headers)
		const orders = await Order.findAll()
		return !orders ? res.status(404).send('No orders found') : res.status(200).json(orders)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function getOneOrder(req, res) {
	try {
		const order = await Order.findByPk(req.params.id)
		if (order) {
			return res.status(200).json(order)
		} else {
			return res.status(404).send('Order not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function createOrder(req, res) {
	try {
		const order = await Order.create(req.body, { fields: ["orderNumber", "dateOrder", "tax", "totalCostOrder"] })
		// const client = await Client.findByPk(req.params.id)
		// order.setClient(client)
		const productsQTYs = req.body.productsQTYs
		for (let i = 0; i < productsQTYs.length; i++) {
			await order.addProduct(productsQTYs[i].productId)
			const productOrder = await Product_Order.findOne({
				where: {
					productId: productsQTYs[i].productId,
					orderNumber: req.body.orderNumber
				}
			})
			productOrder.QTY = productsQTYs[i].QTY
			await productOrder.save()
		}
		return res.status(200).json({ message: 'Order created', order: order })
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function updateOrder(req, res) {
	try {
		const order = await Order.findByPk(req.params.id)
		if (order) {
			await order.update(req.body, {
				returning: true,
				fields: ["orderNumber", "dateOrder", "tax", "totalCostOrder", "clientId", "accountManagerId"]
			})
			const productsQTYs = req.body.productsQTYs
			for (let i = 0; i < productsQTYs.length; i++) {
				await order.addProduct(productsQTYs[i].productId)
				const productOrder = await Product_Order.findOne({
					where: {
						productId: productsQTYs[i].productId,
						orderNumber: req.params.id
					}
				})
				productOrder.QTY = productsQTYs[i].QTY
				await productOrder.save()
			}
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
				orderNumber: req.params.id,
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
	getOneOrder,
	createOrder,
	updateOrder,
	deleteOrder
}