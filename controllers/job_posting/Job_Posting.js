const JobPosting = require('../../model/Job_Posting_Model');
const Company = require('../../model/Company_Model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.list = async(req,res) => {

    let keyword = (req.query.keyword && req.query.trim()) ||  "";

    const lists = await JobPosting.findAll({
        include : [
            {
                model:Company,
                required: true,
                attributes : ['name','country','region'],
                where : {
                    [Op.or] : [
                        {
                            name : {
                                [Op.like] : `${keyword}%`
                            },
                            country : {
                                [Op.like] : `${keyword}%`
                            },
                            region : {
                                [Op.like] : `${keyword}%`
                            },
                        }
                    ]
                }
            }
        ],
        where : {
            [Op.or] : [
                {
                    content : {
                        [Op.like] : `${keyword}%`
                    },
                    position : {
                        [Op.like] : `${keyword}%`
                    },
                    tech_stack : {
                        [Op.like] : `${keyword}%`
                    },
                }
            ]
        }
    });


    res.status(200).json({lists : lists});

} 

exports.register = async(req,res) => {

    await JobPosting.create(req.body);

    res.send('Content has been Posted');
    
};

exports.edit = (req,res) => {

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
                posting_id : posting_id
            }
        }
    ).then(()=>{

        res.redirect('/list/'+posting_id);
    })
    .catch((err)=>{

        res.status(401).json({

            messege : "수정에 실패하였습니다. 다시 확인 해 주세요"
        })
    })
};

exports.remove = (req,res) => {

    let posting_id = Number(req.body.posting_id);

    JobPosting.destroy(
        {
            where:{
                posting_id : posting_id
            }
        }
    ).then(()=>{
        
        res.status(201).json({message : "deleted"});

    })
    .catch((err) =>{

        console.log(err)
    })
}


exports.listDetail = async (req,res) => {

    let posting_id = Number(req.params.posting_id);

    const detail = await JobPosting.findOne({
        include : [{

            model : Company,
            attributes : ['name','country','region'],
            },
        ],
        where : {
            posting_id : posting_id
        }
        
    });


    res.status(201).json({detail : detail});
}
