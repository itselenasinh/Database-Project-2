const Client = require('../models/client.model')
const AccountManager = require('../models/accountManager.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function getAllClients(req, res) {
	try {
		console.log(req.headers)
		const clients = await Client.findAll()
		return !clients ? res.status(404).send('No clients found') : res.status(200).json(clients)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function getOneClient(req, res) {
	try {
		const client = await Client.findByPk(req.params.id)
		if (client) {
			return res.status(200).json(client)
		} else {
			return res.status(404).send('Client not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function createClient(req, res) {
	try {
		const hashed_pwd = bcrypt.hashSync(req.body.password, 10);
		const client = await Client.create({
			name: req.body.name,
			nif: req.body.nif,
			email: req.body.email,
			mobile: req.body.mobile,
			owner: req.body.owner,
			city: req.body.city,
			address: req.body.address,
			zipCode: req.body.zipCode,
			type: req.body.type,
			password: hashed_pwd,
		})
		const accountManager = await AccountManager.findByPk(req.params.accountManagerId)
		client.setAccountManager(accountManager)
		return res.status(200).json({ message: 'Client created' })

	} catch (err) {
		res.status(403).json(err.message)
	}
}

async function clientLogin(req, res) {
	try {
		const client = await Client.findOne({ where: { email: req.body.email } })
		if (!client) return res.status(404).json({ error: 'wrong email or password' })
		bcrypt.compare(req.body.password, client.password, (err, result) => {
			if (!result) {
				return res.json({ error: `wrong email or password` })
			}
			const client_data = { name: client.name, email: client.email }
			const token = jwt.sign(
				client_data,
				process.env.SECRETCN,
				{ expiresIn: '1h' }
			)
			return res.status(200).json({ token: token, ...client_data })
		})
	} catch (err) {
		res.status(403).json(err.message)
	}
}

async function updateClient(req, res) {
	try {
		const [clientExist, client] = await Client.update(req.body, {
			returning: true,
			where: {
				clientId: req.params.id,
			},
		})
		if (clientExist !== 0) {
			return res.status(200).json({ message: 'Client updated', client: client })
		} else {
			return res.status(404).send('Client not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteClient(req, res) {
	try {
		const client = await Client.destroy({
			where: {
				clientId: req.params.id,
			},
		})
		if (client) {
			return res.status(200).json('Client deleted')
		} else {
			return res.status(404).send('Client not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllClients,
	getOneClient,
	createClient,
	clientLogin,
	updateClient,
	deleteClient
}