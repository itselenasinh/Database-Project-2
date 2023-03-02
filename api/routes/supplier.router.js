const router = require('express').Router()

const {
  getAllSuppliers,
  getOneSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier
} = require('../controllers/supplier.controller')

router.get('/', getAllSuppliers)
router.get( '/:id', getOneSupplier)
router.post('/', createSupplier)
router.put( '/:id', updateSupplier)
router.delete( '/:id', deleteSupplier)

module.exports = router