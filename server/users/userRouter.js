'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity').userModel;
/* for inserting values */
router.post('/add', function(req, res){
	logger.debug("Received request"+JSON.stringify(req.body));
  if(req.body)
  {
    let user = new userModel(req.body);
    user.save(function(err){
    if(err){
      res.send(err);
    }
    else{
       res.json({message:'User saved successfully'});
    }
    });
  }
})
/* to view the details */
router.get('/find', function(req, res) {
   console.log('Inside get');
   userModel.find({}, function(err, user) {
       if (err) {
           res.send(err);
       } else {
           //  console.log(user);
           res.send(user);
       }
   });
   //res.send('response from user GET route check');
});
/* to delete the values */
router.delete('/delete', function(req, res) {
   console.log('Inside delete');
   let name = req.body.userName;
   if (Object.keys(req.body).length === 0) {
       res.send('response from user delete route check');
   } else {
       userModel.remove({
           userName: name
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


// Get details of all users in the system
router.get('/', function(req, res) {

  res.send('response from user GET route check');
});

module.exports = router;
