const router = require('express').Router()

const { checkAuthAccountManager } = require('../utils')

const {
  getAllClients,
	getOneClient,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/client.controller')

router.get('/', checkAuthAccountManager, getAllClients)
router.get( '/:id', checkAuthAccountManager, getOneClient)
router.post('/accountManager/:accountManagerId', checkAuthAccountManager, createClient)
router.put( '/accountManager/:clientId', checkAuthAccountManager, updateClient)
router.delete( '/:id', checkAuthAccountManager, deleteClient)

module.exports = router