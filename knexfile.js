// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: "postgresql://localhost/g102_student_db"
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
