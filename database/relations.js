const Client = require('../api/models/client.model')
const AccountManager = require('../api/models/accountManager.model')
const Order = require('../api/models/order.model')
const Batch = require('../api/models/batch.model')

const Product = require('../api/models/product.model')

const Supplier = require('../api/models/supplier.model')

function addRelationsToModels() {
  try {
    AccountManager.hasMany(Client)
    Client.belongsTo(AccountManager)
    Client.hasMany(Order)
    Order.belongsTo(Client)
    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels