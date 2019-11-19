var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/left', function(req, res, next) {
    console.log('received a left')
})

router.get('/', function(req, res, next) {
    let exes = 5
    res.render('index', { title: `threekit job app demo` });
});

module.exports = router;
