const router = require('express').Router()

const {
  getAllBatches,
  getOneBatch,
  createBatch,
  updateBatch,
  deleteBatch
} = require('../controllers/batch.controller')

router.get('/', getAllBatches)
router.get('/:id', getOneBatch)
router.post('/', createBatch)
router.put( '/:id', updateBatch)
router.delete( '/:id', deleteBatch)

module.exports = router