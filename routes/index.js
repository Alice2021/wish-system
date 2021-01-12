var express = require('express');
var router = express.Router();

/**
 * 引入自定义的controller
 */
const IndexController = require('../controllers/index');
router.get('/', IndexController.getList);
router.post('/add', IndexController.add);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
