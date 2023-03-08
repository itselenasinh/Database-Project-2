const Supplier = require('../models/supplier.model')

async function getAllSuppliers(req, res) {
  try {
    console.log(req.headers)
    const suppliers = await Supplier.findAll()
    return !suppliers ? res.status(404).send('No suppliers found') : res.status(200).json(suppliers)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneSupplier(req, res) {
	try {
		const supplier = await Supplier.findByPk(req.params.id)
		if (supplier) {
			return res.status(200).json(supplier)
		} else {
			return res.status(404).send('Supplier not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createSupplier(req, res) {
    try {
      const supplier = await Supplier.create(req.body)
      return res.status(200).json({ message: 'Supplier created', supplier: supplier })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

async function updateSupplier(req, res) {
	try {
		const [supplierExist, supplier] = await Supplier.update(req.body, {
			returning: true,
			where: {
				supplierCode: req.params.id,
			},
		})
        if (supplierExist !== 0) {
			return res.status(200).json({ message: 'Supplier updated', supplier: supplier })
		} else {
			return res.status(404).send('Supplier not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteSupplier(req, res) {
	try {
		const supplier = await Supplier.destroy({
			where: {
				supplierCode: req.params.id,
			},
		})
		if (supplier) {
			return res.status(200).json('Supplier deleted')
		} else {
			return res.status(404).send('Supplier not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
    getAllSuppliers,
	getOneSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier
  }