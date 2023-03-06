const Client = require('../api/models/client.model')
const AccountManager = require('../api/models/accountManager.model')
const Order = require('../api/models/order.model')
const Batch = require('../api/models/batch.model')
const Product = require('../api/models/product.model')
const Supplier = require('../api/models/supplier.model')
const Product_Order = require('../api/models/product_order.model')

function addRelationsToModels() {
  try {
    Client.hasMany(Order)
    Order.belongsTo(Client, {foreignKey: 'orderNumber'})
    
    AccountManager.hasMany(Client)
    Client.belongsTo(AccountManager)
  
    // AccountManager.hasMany(Order, {foreignKey: 'orderNumber'})
    // Order.belongsTo(AccountManager, {foreignKey: 'orderNumber'})

    // Product.belongsToMany(Order, { through: Product_Order, foreignKey: 'productId', otherKey: 'orderNumber'})
    // Order.belongsToMany(Product, { through: Product_Order, foreignKey: 'orderNumber', otherKey: 'productId'})

    // Supplier.hasMany(Product, {foreignKey: 'productId'})
    // Product.belongsTo(Supplier, {foreignKey: 'productId'})

    // Batch.hasMany(Product, {foreignKey: 'productId'})
    // Product.belongsTo(Batch, {foreignKey: 'productId'})

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels