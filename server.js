const express = require('express');
const sequelize = require('./database');

sequelize.sync({force:true}).then(()=>{
    console.log("DATABSE IS RUUNING");
})
const app = express();
app.use(express.json());

const router = require('./routes')(app);

app.listen(3000,()=>{

    console.log("APP IS RUNNING");

});