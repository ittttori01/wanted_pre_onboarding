const JobPosting = require('../../model/Job_Posting');

exports.register = async(req,res) => {

    await JobPosting.create(req.body);

    res.send('Content has been Posted');
    
};

exports.edit = (req,res) => {

    let company_uuid = req.body.uuid;
    let post_id = req.body.post_id;
    
}