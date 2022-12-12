const express = require('express');
const Router = express.Router();
const homeController = require('../controllers/home_controller');
const {downloadCSV} = require('../controllers/csv_controller');
const passport = require('passport');

Router.get('/', homeController.home);


Router.post('/account', homeController.Create);

// for login

Router.post('/login',passport.authenticate('local',{failureRedirect:'/account'}),homeController.login);

Router.get('/home',(err,res)=>{
    res.render('home');
})


// for csv file 

Router.get("/download", downloadCSV);

// for logout

Router.get('/logout', homeController.logout)


module.exports = Router;

