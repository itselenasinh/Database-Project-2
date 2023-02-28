const router = require('express').Router()

const {
  getAllClients,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/client.controller')

router.get('/', getAllClients)
router.post('/', createClient)
router.put( '/:id', updateClient)
router.delete( '/:id', deleteClient)

module.exports = router