const router = require('express').Router()

const {
  getAllBatches,
  getOneBatch,
  createBatch,
  updateBatch,
  deleteBatch
} = require('../controllers/batch.controller')

const { checkAuthAccountManager } = require('../utils/index')

router.get('/', checkAuthAccountManager, getAllBatches)
router.get('/:id', checkAuthAccountManager, getOneBatch)
router.post('/', checkAuthAccountManager, createBatch)
router.put( '/:id', checkAuthAccountManager, updateBatch)
router.delete( '/:id', checkAuthAccountManager, deleteBatch)

module.exports = router