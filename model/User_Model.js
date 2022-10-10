const {DataTypes} = require('sequelize');
const sequelize = require('../database');
const Apply_Model = require('./Apply_Model');

const User = sequelize.define('job_posting',{
    user_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey : true
    },
    uuid : {
        type : DataTypes.STRING,
        allowNull : false
    },
    family_name: {
        type : DataTypes.STRING,
        allowNull : false
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false
    },
    tech_stack : {
        type : DataTypes.STRING,
        allowNull : true
    },

},{
    sequelize,
    modelName : 'user',
    timestamps : true,
    charset: "utf8",
    collate: "utf8_general_ci",
});

User.hasMany(Apply_Model);

module.exports = User;
