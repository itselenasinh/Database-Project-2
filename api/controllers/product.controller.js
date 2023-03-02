const Product = require('../models/product.model')
const Supplier = require('../models/supplier.model')

async function getAllProducts(req, res) {
  try {
    console.log(req.headers)
    const products = await Product.findAll()
    return !products ? res.status(404).send('No products found') : res.status(200).json(products)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneProduct(req, res) {
	try {
		const product = await Product.findByPk(req.params.id)
		if (product) {
			return res.status(200).json(product)
		} else {
			return res.status(404).send('Product not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createProduct(req, res) {
    try {
      const product = await Product.create(req.body)
	  const supplier = await Supplier.findByPk(req.params.supplierId)
	  product.setSupplier(supplier)
      return res.status(200).json({ message: 'Product created', product: product })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

async function updateProduct(req, res) {
	try {
		const [productExist, product] = await Product.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (productExist !== 0) {
			return res.status(200).json({ message: 'Product updated', product: product })
		} else {
			return res.status(404).send('Product not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteProduct(req, res) {
	try {
		const product = await Product.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (product) {
			return res.status(200).json('Product deleted')
		} else {
			return res.status(404).send('Product not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
    getAllProducts,
	getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }