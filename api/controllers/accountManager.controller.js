const AccountManager = require('../models/accountManager.model')

async function getAllAccountManagers(req, res) {
  try {
    console.log(req.headers)
    const accountManagers = await AccountManager.findAll()
    return !accountManagers ? res.status(404).send('No account managers found') : res.status(200).json(accountManagers)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneAccountManager(req, res) {
	try {
		const accountManager = await AccountManager.findByPk(req.params.id)
		if (accountManager) {
			return res.status(200).json(accountManager)
		} else {
			return res.status(404).send('Account Manager not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function createAccountManager(req, res) {
    try {
      const accountManager = await AccountManager.create(req.body)
      return res.status(200).json({ message: 'Account Manager created', accountManager: accountManager })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

async function updateAccountManager(req, res) {
	try {
		const [accountManagerExist, accountManager] = await AccountManager.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (accountManagerExist !== 0) {
			return res.status(200).json({ message: 'Account Manager updated', accountManager: accountManager })
		} else {
			return res.status(404).send('Account Manager not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteAccountManager(req, res) {
	try {
		const accountManager = await AccountManager.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (accountManager) {
			return res.status(200).json('Account Manager deleted')
		} else {
			return res.status(404).send('Account Manager not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
    getAllAccountManagers,
	getOneAccountManager,
    createAccountManager,
    updateAccountManager,
    deleteAccountManager
  }