const router = require('express').Router()

const { checkAuthAccountManager, checkAuthClient } = require('../utils')

const {
  getAllClients,
	getOneClient,
  createClient,
  clientLogin,
  updateClient,
  deleteClient
} = require('../controllers/client.controller')

router.get('/', checkAuthAccountManager, getAllClients)
router.get( '/:id', checkAuthAccountManager, getOneClient)
router.post('/accountManager/:accountManagerId', checkAuthAccountManager, createClient)
router.post('/clientLogin', clientLogin)
router.put( '/:id', checkAuthAccountManager, updateClient)
router.delete( '/:id', checkAuthAccountManager, deleteClient)

module.exports = router