const {DataTypes} = require('sequelize');
const sequelize = require('./database');

const Company = sequelize.define('company',{
    company_id :{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    uuid : {
        type : DataTypes.STRING
    },
    country: {
        type : DataTypes.STRING
    },
    region : {
        type : DataTypes.STRING
    },

},{
    sequelize,
    modelName : 'company',
    timestamps : true
});

module.exports = Company;