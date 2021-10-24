require('dotenv').config();

module.exports = {
  username: process.env.DB_USERNAME || "P7lRWHw7KV",
  password: process.env.DB_PASSWORD || "ATMyUkrOVn", //1234
  database: process.env.DB_DATABASE || "P7lRWHw7KV",// sequelize
  host: process.env.DB_HOST || "remotemysql.com",
  dialect: process.env.DB_DIALECT || "mysql",
  define: {
    timestamps: false,

    // Genera claves foraneas de este tipo user_id en vez de userId
    underscored: true
  }
}