var models = require('./models');

module.exports = function (req, res, next){
  models.User.findAll({
    attributes: ['name', 'score'],
    order: [ [ 'score', 'DESC' ] ]
  }).then(scores => {
    if (scores) res.send(scores);
    else res.sendStatus(400);
  }).catch(err => next(err));
};
