const jwt = require('jsonwebtoken')
const AccountManagerModel = require('../models/accountManager.model')
const ClientModel = require('../models/client.model')

async function checkAuthAccountManager (req, res, next) {
    if (!req.headers.token) {
      res.status(403).json({ error: 'No Token found' })
    } else { 
      try {
        jwt.verify(req.headers.token, process.env.SECRETAM, async (err, decoded) => {
          if (err) return res.status(401).send('You do not have rights to access')
          const accountManager = await AccountManagerModel.findOne({ where: { email: decoded.email } })
      
          if (!accountManager) return res.status(401).send('You do not have rights to access')
          else {
            res.locals.accountManager = accountManager
          }
          next()
        })
      } catch (error) {
        res.status(403).json({ error: `Token not valid + ${error}` })
      }
    }
  }

async function checkAuthClient (req, res, next) {
    if (!req.headers.token) {
      res.status(403).json({ error: 'No Token found' })
    } else { 
      try {
        const decodedToken = jwt.verify(req.headers.token, process.env.SECRETCN)
  
        res.locals.user = await ClientModel.findOne({ email: decodedToken.email })
        next()
      } catch (error) {
        res.status(403).json({ error: `Token not valid + ${error}` })
      }
    }
  }
  

module.exports = { 
checkAuthAccountManager,
checkAuthClient }

