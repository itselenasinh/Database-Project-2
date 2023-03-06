const router = require('express').Router()

const {
  getAllClients,
	getOneClient,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/client.controller')

router.get('/', getAllClients)
router.get( '/:id', getOneClient)
router.post('/accountManager/:accountManagerId', createClient)
router.put( '/accountManager/:clientId', updateClient)
router.delete( '/:id', deleteClient)

module.exports = router