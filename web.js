const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const homeRouter = require('./routers/homeRouter');
const userRouter = require('./routers/userRouter');
const interviewRouter = require('./routers/interviewRouter');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passportConfig');



const port = process.env.port || 5000;

const web = express();


// db connection

mongoose.connect('mongodb://127.0.0.1:27017/studentsdata',{useNewUrlParser:true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error in connection");})
db.once('open',()=>{console.log("connected");})



web.use(express.urlencoded({extended: false}));
web.use(cookieParser());
web.use(express.json());

web.use(express.static('public'));

web.set('view engine','ejs');

web.use(session({secret: 'something',
saveUninitialized: false,
resave: false}));
web.use(passport.initialize());
web.use(passport.session());


web.use('/', homeRouter);
web.use('/', userRouter);
web.use('/', interviewRouter);




web.listen(port)