const JobPosting = require('../../model/Job_Posting');

exports.register = async(req,res) => {

    await JobPosting.create(req.body);

    console.log()
    res.send('Content has been Posted');
    
}