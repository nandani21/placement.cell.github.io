const express = require('express');
const Router = express.Router();
const interviewSchema = require('../models/interviewSchema');
const userSchema = require('../models/userSchema');
const interviewController = require('../controllers/interview_controller');

Router.get('/', interviewController.addInterview);

//for create new student
Router.get('/interview', interviewController.addInterview);

Router.post('/interview', interviewController.create);
 
// for show the data

Router.get('/interviewlist', interviewController.showinterview)



module.exports = Router;