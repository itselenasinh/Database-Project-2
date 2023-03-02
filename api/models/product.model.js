const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Product = sequelize.define(
    'product',
    {
        productId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eanCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stockProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        priceProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tax: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        groupProduct: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Product