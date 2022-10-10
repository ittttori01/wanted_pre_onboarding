const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const Apply = sequelize.define('job_posting',{
    apply_id :{
        type: DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    posting_id: {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
},{
    sequelize,
    modelName : 'apply',
    timestamps : true,
    charset: "utf8",
    collate: "utf8_general_ci",
});


module.exports = Apply;
