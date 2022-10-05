const Company = require('../../model/Company');
const _uuid = require('uuid');

exports.register = (req,res) => {
    
    let uuid = _uuid.v4();

    Company.create({

        uuid : uuid,
        name : req.body.name,
        country : req.body.country,
        region : req.body.region
    })
    .then(()=>{
        
        res.status(200).json({
            uuid: uuid,
            messege : "Compayny Has Been Registered"
        
        });

    });

};

exports.getAllCompany = async(req,res) => {

    const company = await Company.findAll();
   res.send(company)
}