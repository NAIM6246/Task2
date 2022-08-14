const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');

//scaffolding
const db = {};

db.Sequelize = Sequelize;


db.sequelize = new Sequelize(
    dbConfig.DBConfig.DB,
    dbConfig.DBConfig.USER,
    dbConfig.DBConfig.PASSWORD, {
        host : dbConfig.DBConfig.HOST,
        dialect : dbConfig.DBConfig.dialect
    }
)

db.sequelize.authenticate()
    .then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.log('Error while connecting Database. '+err);
        // throw new Error('Error connecting db: '+err);
    });


db.blogs = require('../models/domains/blogs')(db.sequelize,DataTypes)
db.users = require('../models/domains/user')(db.sequelize,DataTypes)

db.sequelize.sync({ force:true })
.then(()=>{
    console.log('resynced database');
})

module.exports = db;