const User = require('../models/homeSchema');

module.exports.home = function(req,res){
    return res.render('account',{title :'Fill Form',password:'',email:''});
}


// create a aacount

module.exports.Create = function(req,res){
    if(req.body.password != req.body.cpassword){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err,user){
        if(err){console.log('error in finding user'); return}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in finding user'); return}

                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    })
}

// for login

module.exports.login = function(req,res){
    return res.redirect('/home');
}

// for logout

module.exports.logout = function(req,res){
    req.session.destroy(function(err){
        if(err){
            console.log('error');
        }else{
            res.render('account');   
        }
    })
}

