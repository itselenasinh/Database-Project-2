const Client = require('../api/models/client.model')
const Order = require('../api/models/order.model')


function addRelationsToModels() {
  try {
    
Client.hasMany(Order)
Order.belongsTo(Client)

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels