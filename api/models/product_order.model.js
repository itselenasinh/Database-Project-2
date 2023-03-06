const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Product_Order = sequelize.define(
    'product_order',
    {
        QTY: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Product_Order