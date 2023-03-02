const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Batch = sequelize.define(
    'batch',
    {
        batchCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admissionDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stockProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = Batch


