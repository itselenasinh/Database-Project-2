const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Supplier = sequelize.define(
    'supplier',
    {
        supplierCode: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        supplierName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Supplier