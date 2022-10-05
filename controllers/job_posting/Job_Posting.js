const JobPosting = require('../../model/Job_Posting');

exports.list = async(req,res) => {

    const lists = await JobPosting.findAll();

    res.status(200).json({lists : lists});

} 

exports.register = async(req,res) => {

    await JobPosting.create(req.body);

    res.send('Content has been Posted');
    
};

exports.listDetail = async(req,res) => {

    let posting_id = Number(req.body.posting_id);
    let company_id = Number(req.body.company_id);

    // const details = await JobPosting.findOne({
    //     posting_id  : posting_id,
    // })

    // const getRelated = await JobPosting.findAll({
    //     company_id : company_id
    // })

    // console.log(details);
    // console.log();

    const details = await JobPosting.findAll({
        include : [
            {
                model : JobPosting,
                attributes : ['position','salary','content','tech_stack']
            }
        ],
        where : {posting_id : posting_id, company_id : company_id}
    });

    res.send(details)
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
    .catch((err)=>{

        //없는 포스팅 아이디를 했을땐 무슨에러 찍히는지 보기 ,

        res.status(401).json({

            messege : "수정에 실패하였습니다. 다시 확인 해 주세요"
        })
    })
};

exports.remove = (req,res) => {

    let company_id = Number(req.body.company_id);
    let posting_id = Number(req.body.posting_id);

    JobPosting.destroy(
        {
            where:{
                company_id : company_id,
                posting_id : posting_id
            }
        }
    ).then(()=>{
        
        res.direct('/posting');
    })
    .catch((err) =>{

        //에러 보기 
    })
}


exports.detail = async (req,res) => {

    // const user = await User.findOne({
    //     where: { lastName: "Doe" },
    //   });

    let posting_id = Number(req.body.posting_id);

    const posting = await JobPosting.findOne({
        where : {
            posting_id : posting_id
        }
    });

    res.send(200).json({ data : JSON(posting)});

}