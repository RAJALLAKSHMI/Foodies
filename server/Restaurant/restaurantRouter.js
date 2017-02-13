'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');
const Resmodel = require('./restaurantentity');
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
   console.log('inside delete');

       Resmodel.remove({id: req.body.id}, function(err) {
           if (err) {
               res.send(err);
           } else {
               res.send('deleted successfully');
           }
       })
       //res.send('deleted');
   });
// });
router.put('/update', function(req, res) {
    logger.debug("inside restaurant update PUT");
    Resmodel.findOneAndUpdate({
        id: req.body.id

    }, {
        $set: {
            comment: req.body.comment
            // 'address.0.city': req.body.city,
            // 'address.0.state': req.body.state
        }
    }, function(err, users) {
        if (err) {
            res.send('restaurant updation failed' + err);
        } else {
            console.log("rtrtrrtru"+req.body.comment , '  ',req.body.id);
            res.send('restaurant updated successfully!');
        }
    });
});

// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
  res.send('response from user GET route check');
});

module.exports = router;
