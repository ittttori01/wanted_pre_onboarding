const Router = (app) => {

    const Company = require('./controllers/company/company');
    app.post("/company", (req, res) =>Company.register(req,res));
    app.get("/company",(req,res) => Company.getAllCompany(req,res));

    const JobPosting = require('./controllers/job_posting/Job_Posting');
    app.post("/posting",(req,res) => JobPosting.register(req,res));

};
  
  module.exports = Router;