const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const AccountManager = sequelize.define(
    'accountManager',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalClients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalSales: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = AccountManager