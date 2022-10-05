const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const JobPosting = sequelize.define('job_posting',{
    posting_id :{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    company_id: {
        type : DataTypes.STRING
    },
    position : {
        type : DataTypes.STRING
    },
    salary : {
        type : DataTypes.INTEGER
    },
    content : {
        type : DataTypes.TEXT
    },
    tech_stack : {
        type : DataTypes.STRING
    },

},{
    sequelize,
    modelName : 'job_posting',
    timestamps : true,
    charset: "utf8",
    collate: "utf8_general_ci",
});

module.exports = JobPosting;