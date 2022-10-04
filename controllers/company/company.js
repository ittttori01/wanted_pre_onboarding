const Company = require('../../Company');
const _uuid = require('uuid');
const _crypto = require('crypto');

exports.register = (req,res) => {
    
    let uuid = _uuid.v4();

    Company.create({

        uuid : uuid,
        country : req.body.country,
        region : req.body.region
    })
    .then(()=>{
        
        res.status(200).json({
            uuid: uuid,
            message : "Compayny Has Been Registered"
        
        });

    });

};

exports.getAllCompany = async(req,res) => {

    const company = await Company.findAll();
   res.send(company)
}