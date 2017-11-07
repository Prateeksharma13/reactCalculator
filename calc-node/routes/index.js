var express = require('express');
var app = express();                 // define our app using express
var router = express.Router();

/* GET home page. */

router.get('/calculate', function(req, res, next) {
  switch (req.query['operator']) {
  case 'plus':
    let sum = parseFloat(req.query['one'])+ parseFloat(req.query['two']);
    res.set(200);
    res.json({message: 'The numbers have been added', answer: sum});
    break;
  case 'sub':
    let diff = parseFloat(req.query['one'])- parseFloat(req.query['two']);
    res.set(200);
    res.json({message: 'The numbers have been subtracted', answer: diff});
    break;
  case 'mul':
    let product = parseFloat(req.query['one'])* parseFloat(req.query['two']);
    res.set(200);
    res.json({message: 'The numbers have been multiplied', answer: product});
    break;
  case 'div':
      let ans = parseFloat(req.query['one']) / parseFloat(req.query['two']);
      res.set(200);
      res.json({message: 'The numbers have been divided', answer: ans});
      break;
}
});


module.exports = router;
