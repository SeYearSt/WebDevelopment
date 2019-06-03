'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const env = process.env

module.exports = {
  host: env.PORT || 'localhost',
  port: env.HOST || 8080,
  dbschema: env.DBSCHEMA || 'mongodb',
  dbhost: env.DBHOST || 'localhost',
  dbport: env.DBPORT || 27017,
  dbuser: env.DBUSER || 'Admin',
  dbpwd: env.DBPWD || 'Admin',
  dbname: env.DBNAME || 'train_station'
}
