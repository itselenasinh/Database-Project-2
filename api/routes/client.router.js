const router = require('express').Router()

const {
  getAllClients,
  createClient
} = require('../controllers/client.controller')

router.get('/', getAllClients)
router.post('/', createClient)

module.exports = router