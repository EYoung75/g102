const database = require('./database-connection')

module.exports = {
    listAll(){
          return database('students')
    },
    getById(id){
          return database('students').where('id', id)
    },
    createStudent(newStudent){
          return database('students').insert(newStudent)
    },
    daleteStudent(id){
          return database('students').where("id", id).delete()
    },
    updateStudent(id, info){
          return database('students').where("id", id).update(info)
    }
  }
