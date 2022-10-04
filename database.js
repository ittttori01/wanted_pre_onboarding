const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect : 'sqlite',
    storage: './dev.sqlite'
    
});

module.exports= sequelize;
 