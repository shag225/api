var express = require('express');
var router = express.Router();

var mongo = require('mongoose');

mongo.connect('mongodb://shag225:Iceman75@ds251210.mlab.com:51210/pleasure', {useNewUrlParser: true});

const Schema = mongo.Schema;
const ObjectId = Schema.ObjectId;

const Session = new Schema({
  session: ObjectId,
  start: { type: Date, default: Date.now() },
  total_time: String
});

var sessions = mongo.model('sessions', Session, 'sessions2');

/* GET users listing. */
router.get('/', function(req, res, next) {
  sessions.find((err, docs) => {
    if(err){
      console.log(err.message);
    }else{
      console.log(docs);
      res.send(docs);
    }
    

  })
  //res.send('respond with a resource');
});

module.exports = router;
