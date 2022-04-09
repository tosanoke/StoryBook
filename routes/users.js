var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Get goal'});
});
router.post('/', function(req, res, next) {
  res.status(200).json({message: 'Set goal'});
});
router.put('/:id', function(req, res, next) {
  res.status(200).json({message: `Update goal ${req.params.id}`});
});
router.delete('/:id', function(req, res, next) {
  res.status(200).json({message: `delete goal ${req.params.id}`});
});

module.exports = router;
