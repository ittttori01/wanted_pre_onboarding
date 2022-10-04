const Company = require('../../Company');


exports.register = async(req,res) => {
    
    await Company.create(req.body);
    res.send('successed');

};

exports.getAllCompany = async(req,res) => {

    const company = await Company.findAll();
   res.send(company)
}