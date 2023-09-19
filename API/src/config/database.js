require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  username: process.env.DataBase_UserName,
  password: process.env.DataBase_Password,
  database: process.env.DataBase,
  host: process.env.DataBase_Host,
  port: process.env.DataBase_Port,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
