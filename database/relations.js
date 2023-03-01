const Client = require('../api/models/client.model')
const AccountManager = require('../api/models/accountManager.model')

function addRelationsToModels() {
  try {
    AccountManager.hasMany(Client)
    Client.belongsTo(AccountManager)

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels