const JobPosting = require('../../model/Job_Posting');
const Op = require('sequelize');

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
        
        res.send("DELETED")
        // res.redirect('/list');
    })
    .catch((err) =>{

        console.log(err)
    })
}


exports.listDetail = (req,res) => {

    // const user = await User.findOne({
    //     where: { lastName: "Doe" },
    //   });

    const getDetail = () => {

        return new Promise((resolve,reject) => {            

        let posting_id = Number(req.params.posting_id);

        JobPosting.findAll({
            where : {
                posting_id : posting_id
            }
        })
        .then((posting)=>{

            resolve(posting);
        })
        .catch((err) => {

            console.log(err);

            res.status(404);
        });

        })
    }

    const getRelated = (posting) => {

        console.log(posting)
        return new Promise((resolve,reject) => {

            JobPosting.findAll({
        
                where : {
                    posting_id :{[Op.not]:posting[0].posting_id},
                    company_id : Number(posting[0].company_id)
                }
            })
            .then((related)=>{

                console.log(posting,related)
                // res.status(201).json(posting,related)
                // res.send(posting,related)
            });

        })
    }
    // console.log(posting.company_id)


    const run = async() => {

        try {
            let info = await getDetail();
            await getRelated(info);
        } catch (err) {
            console.log(err);
        }
    }

    run();
    

    // res.status(200).json(posting,related);

    // // res.send(posting.company_id)

}