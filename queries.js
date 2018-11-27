const database = require('./database-connection')

module.exports = {
    listAll(){
          return database('students')
    }
  }

  function listSome(){
      return database("selected")
  }

  module.export listSome