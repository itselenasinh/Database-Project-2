const router = require('express').Router()

const {
  getAllAccountManagers,
  createAccountManager,
  updateAccountManager,
  deleteAccountManager
} = require('../controllers/accountManager.controller')

router.get('/', getAllAccountManagers)
router.post('/', createAccountManager)
router.put( '/:id', updateAccountManager)
router.delete( '/:id', deleteAccountManager)

module.exports = router