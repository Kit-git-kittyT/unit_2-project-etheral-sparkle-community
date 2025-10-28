const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User= require('../models/User.js');

router.get('/', async (req, res) => {
    try {

      // const crystals = 
           // 1. talk to db to get all crystals

      res.render('crystals/crystal-index.ejs',  //pass in crystals local}
      );
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
    
    router.get('/bridge', async (req, res)=> {
      try {
          res.render("crystals/bridge.ejs")
      } catch (error){
          console.log(error)
      }
    })
  
    // router.post('/', async (req, res) => {
    //   try {
    //     // Look up the user from req.session
    //     const currentUser = await User.findById(req.session.user._id);
    //     // Push req.body (the new form data object) to the
    //     // applications array of the current user
    //     currentUser.applications.push(req.body);
    //     // Save changes to the user
    //     await currentUser.save();
    //     // Redirect back to the applications index view
    //     res.redirect(`/users/${currentUser._id}/applications`);
    //   } catch (error) {
    //     // If any errors, log them and redirect back home
    //     console.log(error);
    //     res.redirect('/');
    //   }
    // });
  
  //   router.get('/:applicationId', async (req, res) => {
  //    // res.send(`here is your request param: ${req.params.applicationId}`);
  //    try {
  //     // Look up the user from req.session
  //     const currentUser = await User.findById(req.session.user._id);
  //     // Find the application by the applicationId supplied from req.params
  //     const application = currentUser.applications.id(req.params.applicationId);
  //     // Render the show view, passing the application data in the context object
  //     res.render('applications/show.ejs', {
  //       application: application,
  //     });
  //   } catch (error) {
  //     // If any errors, log them and redirect back home
  //     console.log(error);
  //     res.redirect('/');
  //   }
  // });
  


  module.exports= router;