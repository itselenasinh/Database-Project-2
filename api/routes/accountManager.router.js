const router = require('express').Router()

const {
  getAllAccountManagers,
  getOneAccountManager,
  signup,
  login,
  updateAccountManager,
  deleteAccountManager,
  
} = require('../controllers/accountManager.controller')

const { checkAuthAccountManager } = require('../utils')

router.get('/', checkAuthAccountManager, getAllAccountManagers)
router.get( '/:id', checkAuthAccountManager, getOneAccountManager)
router.post('/singup', signup)
router.post('/login', login)
router.put( '/:id', checkAuthAccountManager, updateAccountManager)
router.delete( '/:id', checkAuthAccountManager, deleteAccountManager)

module.exports = router