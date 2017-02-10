'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');
const Resmodel = require('./restaurantentity').resModel;
const bodyparser = require('body-parser');
// var app = express();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
extended: true
}));

/* insert values */
   router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    console.log("Inside user post");
    let name = new Resmodel (req.body);
    name.save(function(err){
      if(err){
      res.send(err);
    }
    else{
      res.send("res added success");
    }
    })
  //  res.send('Hello '+name);
});
/* view the details */
router.get('/find', function(req, res) {
   console.log('Inside get');
   if(req.body)
   {
   Resmodel.find(function(err, user) {
       if (err) {
           res.send(err);
       } else {
           //  console.log(user);
           res.send(user);
       }
     });
   }
   });
   //res.send('response from user GET route check');

/* delete the required value */
router.delete('/delete', function(req, res) {
   console.log('Inside delete');
   let name = new Resmodel(req.body);
   if (Object.keys(req.body).length === 0) {
       res.send('response from user delete route check');
   } else {
       Resmodel.remove({
           Name: req.body.Name
       }, function(err) {
           if (err) {
               res.send(err);
           } else {
               res.send('deleted successfully');
           }
       })
       //res.send('deleted');
   }
});

// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
  res.send('response from user GET route check');
});

module.exports = router;
