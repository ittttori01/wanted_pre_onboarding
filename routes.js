const Router = (app) => {

    const JobPosting = require('./controllers/job_posting/Job_Posting');
    app.get("/list",(req,res) => JobPosting.list(req,res));
    app.get("/list/:posting_id",(req,res) => JobPosting.listDetail(req,res));
    app.post("/list",(req,res) => JobPosting.register(req,res));
    app.put("/list/edit",(req,res)=> JobPosting.edit(req,res));
    app.delete("/list",(req,res) => JobPosting.remove(req,res));

    const Apply = require('./controllers/apply/Apply');
    app.post('/apply',(req,res) => Apply.apply(req,res));
    
};

module.exports = Router;


