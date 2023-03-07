const router = require('express').Router()

const {
  getAllSuppliers,
  getOneSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier
} = require('../controllers/supplier.controller')

const { checkAuthAccountManager } = require('../utils')

router.get('/', checkAuthAccountManager, getAllSuppliers)
router.get( '/:id', checkAuthAccountManager, getOneSupplier)
router.post('/', checkAuthAccountManager, createSupplier)
router.put( '/:id', checkAuthAccountManager, updateSupplier)
router.delete( '/:id', checkAuthAccountManager, deleteSupplier)

module.exports = router