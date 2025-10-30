const dotenv = require('dotenv');
dotenv.config();
const express= require('express');
const app= express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

const authController = require('./controllers/auth.js');
const crystalsController = require('./controllers/crystals.js');
const usersController = require('./controllers/users.js');


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );  


  app.use(passUserToView);



app.get("/", (req, res) =>{
  res.render('index.ejs')
});


app.use('/public', crystalsController);

app.use('/auth', authController);
app.use(isSignedIn);
app.use('/users/:userId/crystals', usersController);


app.listen(3104, ()=>{
    console.log("Tick-tock!")
})