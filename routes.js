const Router = (app) => {

    const Company = require('./controllers/company/company');
    app.post("/company", (req, res) =>Company.register(req,res));
    app.get("/company",(req,res) => Company.getAllCompany(req,res));

    const JobPosting = require('./controllers/job_posting/Job_Posting');
    app.get("/list",(req,res) => JobPosting.list(req,res));
    app.get("/list/:posting_id",(req,res) => JobPosting.listDetail(req,res));
    app.post("/list",(req,res) => JobPosting.register(req,res));
    app.put("/list/edit",(req,res)=> JobPosting.edit(req,res));
    app.delete("/list/remove",(req,res) => JobPosting.remove(req,res));

};
  
  module.exports = Router;