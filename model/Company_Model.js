const {DataTypes} = require('sequelize');
const sequelize = require('../database');
const JobPosting = require('./Job_Posting_Model');
const _uuid = require('uuid');

const Company = sequelize.define('company',{
    company_id :{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        foreignKey : true,
    },
    uuid : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
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
    timestamps : true,
    charset: "utf8",
    collate: "utf8_general_ci",
});

let uuid = _uuid.v4();

const testCompany = Company.build({
    uuid : uuid,
    name : "Wanted Co",
    country : "Korea",
    region : "Seoul"
});

(async () => {
    await sequelize.sync({force:true});
    await testCompany.save();
})();

Company.hasMany(JobPosting,{foreignKey : 'company_id'});
JobPosting.belongsTo(Company,{foreignKey : 'company_id'});

module.exports = Company;
