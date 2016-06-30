var router = require('express').Router();
var models = require('./models');

router.get('/:qno(\\d+)', (req, res) => {
  const { qno } = req.params;
  models.Question.findOne({
    where : { qno },
    attributes: {exclude: ['answer']}
  }).then(question => {
    if (question) res.send(question);
    else res.sendStatus(400);
  })
});

router.post('/check/:qno(\\d+)', (req, res) => {
  const { qno } = req.params;
  const { answer } = req.body;
  models.Question.findOne({where : { qno }})
    .then(question => {
      if (question) res.send({result: question.answer == answer});
      else res.sendStatus(400);
    })
})

module.exports = router;
