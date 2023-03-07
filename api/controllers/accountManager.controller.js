const AccountManager = require('../models/accountManager.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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

async function signup(req, res) {
	try {
		const hashed_pwd = bcrypt.hashSync(req.body.password, 10);
		AccountManager.create({
			name: req.body.name,
			email: req.body.email,
			password: hashed_pwd,
		})
			.then((accountManager) => {
				const accountManager_data = { name: accountManager.name, email: accountManager.email }

				const token = jwt.sign(
					accountManager_data,
					process.env.SECRETAM,
					{ expiresIn: '1h' }
				)
				return res.status(200).json({ token: token, ...accountManager_data })
			})
	} catch (err) {
		res.status(403).json(err.message)
	}
}

async function login(req, res) {
	try {
		const accountManager = await AccountManager.findOne({ where: { email: req.body.email } })
				if (!accountManager) return res.status(404).json({ error: 'wrong email or password' })
				bcrypt.compare(req.body.password, accountManager.password, (err, result) => {
					if (!result) {
						return res.json({ error: `wrong email or password` })
					}
					const accountManager_data = { name: accountManager.name, email: accountManager.email }
					const token = jwt.sign(
						accountManager_data,
						process.env.SECRETAM,
						{ expiresIn: '1h' }
					)
					return res.status(200).json({ token: token, ...accountManager_data })
				})
	} catch (err) {
		res.status(403).json(err.message)
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
	signup,
	login,
	updateAccountManager,
	deleteAccountManager
}