const Client = require('../models/client.model')
const AccountManager = require('../models/accountManager.model')

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
      const client = await Client.create(req.body)
	  const accountManager = await AccountManager.findByPk(req.params.accountManagerId)
	  client.setAccountManager(accountManager)
      return res.status(200).json({ message: 'Client created', client: client })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

async function updateClient(req, res) {
	try {
		const [clientExist, client] = await Client.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
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
				id: req.params.id,
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
    updateClient,
    deleteClient
  }