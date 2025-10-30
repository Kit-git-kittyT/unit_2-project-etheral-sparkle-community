const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User= require('../models/User.js');

router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.render('crystals/crystal-index.ejs', {
        crystals: currentUser.crystals,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });

  router.get('/new', async (req, res)=> {
    try {
        res.render("crystals/new.ejs")
    } catch (error){
        console.log(error)
    }
  });

  router.post('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      currentUser.crystals.push(req.body);
      await currentUser.save();
      // Redirect back to the applications index view
     // res.redirect(`/users/${currentUser._id}/crystals`);
     res.redirect(`/users/${currentUser._id}/crystals`) 
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });

  router.get('/:crystalId/edit', async (req,res)=>{
    try{
        const currentUser = await User.findById(req.session.user._id);
        const crystal = currentUser.crystals.id(req.params.crystalId);
        res.render('crystals/edit.ejs', {
            crystal: crystal,
        });
    } catch (error){
        console.log(error);
        res.redirect('/');
    }
  } )
  
router.put('/:crystalId', async (req,res)=>{
    try{
        const currentUser= await User.findById(req.session.user._id);
        const crystal = currentUser.crystals.id(req.params.crystalId);
        crystal.set(req.body);
        await currentUser.save();
        res.redirect(
            `/users/${currentUser._id}/crystals`
        );
    }catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.delete('/:crystalId', async (req,res)=>{
    try{
        const currentUser= await User.findById(req.session.user._id);
        currentUser.crystals.id(req.params.crystalId).deleteOne()
        await currentUser.save();
        res.redirect(`users/${currentUser._id}/crystals`);
    } catch (error){
        console.log(error);
        res.redirect('/');
    }
});
  // delete route

module.exports= router;