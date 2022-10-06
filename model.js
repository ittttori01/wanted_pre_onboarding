const Sequelize = require('sequelize');
const sq = new Sequelize({
    dialect: 'sqlite',
    db: './db/my.db'
});

const Op = require('sequelize');
module.exports = {Sequelize, sq,Op};