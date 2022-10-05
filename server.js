const express = require('express');
const sequelize = require('./database');

sequelize.sync({force:true}).then(()=>{
    
})
const app = express();
app.use(express.json());
// app.post('/company',(req,res)=>{

//     Company.create(req.body
//     ).then(()=>{
      
//         res.send('success')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// });

// app.get('/company',async(req,res)=>{

//    const company = await Company.findAll();
//    res.send(company)
// })

const router = require('./routes')(app);

app.listen(3000,()=>{

    console.log("APP IS RUNNING");
});