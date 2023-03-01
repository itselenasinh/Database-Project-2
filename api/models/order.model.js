const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Order = sequelize.define(
    'order',
    {
        orderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateOrder: {
            type: DataTypes.DATE,
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
        totalCostOrder: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Order


