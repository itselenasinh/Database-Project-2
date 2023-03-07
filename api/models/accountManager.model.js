const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const AccountManager = sequelize.define(
    'accountManager',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email format'
                }
            },
        },
        totalClients: {
            type: DataTypes.STRING,
            allowNull: true
        },
        totalSales: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    { timestamps: false }
)

module.exports = AccountManager