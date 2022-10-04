const Sequelize = require('sequelize');
const sq = new Sequelize({
    dialect: 'sqlite',
    db: './db/my.db'
});
module.exports = {Sequelize, sq};