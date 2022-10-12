const Apply_Model = require('../../model/Apply_Model');

exports.apply = async(req,res) => {

    let posting_id = req.body.posting_id;
    let user_id = req.body.user_id;

    const history = await Apply_Model.findOne({
        where : {
            posting_id : posting_id,
            user_id : user_id
        }
    })

    if(history){

        res.send('이미 지원한 이력이 있습니다.');

    }else{
        
        await Apply_Model.create(req.body);

        res.status(200).json({message : "지원이 완료 되었습니다."});
        
    };

};