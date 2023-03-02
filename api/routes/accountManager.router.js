const router = require('express').Router()

const {
  getAllAccountManagers,
  getOneAccountManager,
  createAccountManager,
  updateAccountManager,
  deleteAccountManager
} = require('../controllers/accountManager.controller')

router.get('/', getAllAccountManagers)
router.get( '/:id', getOneAccountManager)
router.post('/', createAccountManager)
router.put( '/:id', updateAccountManager)
router.delete( '/:id', deleteAccountManager)

module.exports = router