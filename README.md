# Database-Project-2
// README.md
# Project Support
### Introduction

Biormerkalia SL is a B2B company, which is responsible for the distribution of organics products throughout the Canary Islands. Currently, they place orders for around 800 clients and work with around 2000 references among many European suppliers and manufacturers. The idea of this project is to create an application that connects clients directly with the company and can place their own orders, while introducing the Commercial Delegate role, who also has access to place orders.

### Project Support Features
* Clients have user rights. They can login to their accounts, make, modify, view their orders.
* Account managers have admin rights. They can signup and login into their accounts, make, modify, view their clients' orders. They are creating client accounts.
* Managers have director rights. They can signup and login into their accounts. They have full access to the orders and full rights - make, view modify, delete all of the orders.
* Non-authenticated users cannot access.

### Installation Guide
* Clone this repository [here](https://github.com/itselenasinh/Database-Project-2).
* The main branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can work with the database in Dbeaver.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Usage
* Run node index.js to start the application.
* Connect to the API using Postman on port 3000.

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/clients | To retrieve all clients |
| GET | /api/clients/:clientId | To retrieve details of a single client |
| POST | /api/client/signup | To sign up a new client account |
| POST | /api/client/login | To login an existing client account |
| GET | /api/clients/accountManager/:accountManagerId | To retrieve all clients of exact Account Manager |
| PUT | /api/clients/:clientId | To edit the details of a single client |
| DELETE | /api/clients/:clientId | To delete a single client |
| | | |
| GET | /api/accountManagers | To retrieve all Account Managers |
| GET | /api/accountManagers/:accountManagerId | To retrieve details of a single Account Manager|
| POST | /api/accountManager/signup | To sign up a new accountManager's account |
| POST | /api/accountManager/login | To login an accountManager's account |
| GET | /api/accountManager/client/:clientId | To retrieve exact Account Manager of a client |
| PUT | /api/accountManagers/:accountManagerId | To edit the details of a single Account Manager|
| DELETE | /api/accountManagers/:accountManagerId | To delete a single Account Manager |
| | | |
| GET | /api/orders | To retrieve all orders |
| GET | /api/order/:orderNumber | To view an existing order |
| POST | /api/order | To create a new order |
| GET | /api/orders/accountManager/:accountManagerId | To retrieve all orders of exact Account Manager |
| GET | /api/orders/client/:clientId | To retrieve all orders of exact client |
| GET | /api/orders/product/:productId | To retrieve all orders of exact product |
| PUT | /api/orders/:orderNumber | To edit the details of a single order |
| DELETE | /api/oders/:orderNumber | To delete a single order |
| | | |
| GET | /api/products| To retrieve all products |
| GET | /api/products/:productId | To retrieve details of a single product |
| POST | /api/product| To create product |
| GET | /api/products/supplier/:supplierCode | To retrieve all products of exact supplier | 
| GET | /api/products/order/:orderNumber | To retrieve all products of exact order | 
| GET | /api/products/batch/:batchCode | To retrieve all products of exact batch | 
| PUT | /api/produts/:productId | To edit the details of a single product |
| DELETE | /api/products/:productId | To delete a single product |
| | | |
| GET | /api/suppliers| To retrieve all suppliers |
| GET | /api/suppliers/:supplierCode | To retrieve details of a single supplier |
| POST | /api/supplier| To create supplier |
| GET | /api/suppliers/product/:productId | To retrieve supplier of exact product | 
| PUT | /api/suppliers/:supplierCode | To edit the details of a single supplier |
| DELETE | /api/suppliers/:supplierCode | To delete a single supplier |
| | | |
| GET | /api/batches| To retrieve all batches |
| GET | /api/batches/:batcheCode | To retrieve details of a single batch |
| POST | /api/batches| To create batch |
| GET | /api/batches/product/:productId | To retrieve all batches of exact product |
| PUT | /api/batches/:batchCode | To edit the details of a single batch |
| DELETE | /api/batches/:batchCode | To delete a single batch |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [bcrypt](https://www.npmjs.com/package/bcrypt) A library to help you hash passwords.
* [helmet](https://www.npmjs.com/package/helmet) Helmet helps you secure your Express apps by setting various HTTP headers. 
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) An implementation of JSON Web Tokens.
* [morgan](https://www.npmjs.com/package/morgan) HTTP request logger middleware for node.js
* [pg](https://www.npmjs.com/package/pg) Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
* [pg-hstore](https://www.npmjs.com/package/pg-hstore) A node package for serializing and deserializing JSON data to hstore format
* [sequelize](https://sequelize.org/)Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. 
* [cors] (https://www.npmjs.com/package/cors) CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### License
This project is available for the private usage of Company.