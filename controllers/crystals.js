const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User= require('../models/User.js');

router.get('/crystals', async (req, res) => {
    try {
      const allUsers= User.find({});
      const allCrystals= [];
      allUsers.forEach(user=>{
        user.crystals.forEach(crystal=>{
          allCrystals.push({
            ...crystal.toObject(),
            ownerUsername: user.username
          })
        })
      });

      res.render('crystals/allCrystals.ejs', {crystals: allCrystals }
      );
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
    
 
  module.exports= router;