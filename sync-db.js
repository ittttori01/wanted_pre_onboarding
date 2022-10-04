const model = require('./model');

module.exports = () => {
    return model.sequelize.sync({force: true}); //force: true는 기존에 DB가 있더라도 재생성하겠다는 의미이다.
}