var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var session = require('express-session')

router.use(function(req, res, next) {
  if(req.session.user)
    req.user = req.session.user;
  else
    req.user =null;
  next();
});

/* GET users listing. */
router.get('/getMenu', function(req, res) {
    var db = req.db;
    
    var collection = db.get('coderobo-settings');
    collection.find({},'-password',function(e,docs){
    	res.send(docs);
    });

});




module.exports = router;
