const {DataTypes} = require('sequelize');
const sequelize = require('../database');
const _uuid = require('uuid');

const User = sequelize.define('user',{
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

let uuid = _uuid.v4();

const testUser = User.build({
    uuid : uuid,
    family_name : "kim",
    name : "Jung Kook",
    email :"test@gmail.com",
    phone : "01000000000",
    tech_stack : "Node.js,Aws,Javascript"
})

(async () => {
    await sequelize.sync({force:true})
    await testUser.save()
})();

module.exports = User;
