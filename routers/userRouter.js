const express = require('express');
const Router = express.Router();
const userSchema = require("../models/userSchema");
const userController = require('../controllers/student_controller');

//for create new student 

Router.get('/', userController.addStudent);

Router.get('/add_user', userController.addStudent);

Router.post('/add_user', userController.Create);

// for student data add in list

Router.get('/dashbord', userController.showStudent);

// for editing the list 

Router.get('/edit/:id', userController.editStudent)

Router.post('/edit/:id', userController.editdetail)

Router.get('/delete/:id', userController.deleteStudent)

module.exports = Router;