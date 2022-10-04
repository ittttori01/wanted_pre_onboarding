const JobPosting = require('../../model/Job_Posting');

exports.register = async(req,res) => {

    await JobPosting.create(req.body);

    res.send('Content has been Posted');
    
};

exports.edit = (req,res) => {

    let company_id = Number(req.body.company_id);
    let posting_id = Number(req.body.posting_id);
    
    JobPosting.update(
        {
            position : req.body.position,
            rewards : Number(req.body.rewards),
            content : req.body.content,
            tech_stack : req.body.tech_stack
        },
        {
            where : {
                company_id : company_id,
                posting_id : posting_id
            }
        }
    ).then(()=>{

        res.redirect('/jobpost/detail/'+ posting_id);
    })
}