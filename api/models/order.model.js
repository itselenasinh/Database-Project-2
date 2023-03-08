const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Order = sequelize.define(
    'order',
    {
        orderNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        dateOrder: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tax: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalCostOrder: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Order


