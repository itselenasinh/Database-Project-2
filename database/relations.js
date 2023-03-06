const Client = require('../api/models/client.model')
const AccountManager = require('../api/models/accountManager.model')
const Order = require('../api/models/order.model')
const Batch = require('../api/models/batch.model')
const Product = require('../api/models/product.model')
const Supplier = require('../api/models/supplier.model')
const Product_Order = require('../api/models/product_order.model')

function addRelationsToModels() {
  try {
    Client.hasMany(Order, {foreignKey: 'clientId'})
    Order.belongsTo(Client, {foreignKey: 'clientId'})
    
    AccountManager.hasMany(Client)
    Client.belongsTo(AccountManager)
  
    AccountManager.hasMany(Order, {foreignKey: 'accountManagerId'})
    Order.belongsTo(AccountManager, {foreignKey: 'accountManagerId'})

    Product.belongsToMany(Order, { through: Product_Order, foreignKey: 'productId', otherKey: 'orderNumber'})
    Order.belongsToMany(Product, { through: Product_Order, foreignKey: 'orderNumber', otherKey: 'productId'})

    Supplier.hasMany(Product, {foreignKey: 'supplierCode'})
    Product.belongsTo(Supplier, {foreignKey: 'supplierCode'})

    Batch.hasMany(Product, {foreignKey: 'batchCode'})
    Product.belongsTo(Batch, {foreignKey: 'batchCode'})

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels