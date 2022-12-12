const userSchema = require("../models/userSchema");


module.exports.addStudent = function(req,res){
    return res.render('add_user');
}

// for add new student

module.exports.Create = function(req, res){
      const {
        batch,
        name,
        gender,
        email,
        phoneno,
        college,
        placestatus,
        dsa,
        web,
        react,
      } = req.body;
  
      // check if student already exist
      userSchema.findOne({ email: req.body.email }, function (err, student) {
        if (err) {
          console.log("error in finding student");
          return res.redirect("back");
        }
  
        if (!student) {
           userSchema.create(
            {
                batch,
                name,
                gender,
                email,
                phoneno,
                college,
                placestatus,
                dsa,
                web,
                react,
            },
            function (err, student) {
                if (err) {
                  console.log("student not added");
                  return res.redirect("back");
                }
      
                return res.redirect("back");
              }
            );
        } else {
              console.log('error');
              return res.redirect("back");
        }
      });
};

// for show the student list

module.exports.showStudent = function(req,res){
  userSchema.find((err,docs)=>{
      if(err){
          console.log('error')
      }
      
      res.render('dashbord',{
          slists : docs
      })
  })
}

// get data for edit the details

module.exports.editStudent = function(req,res){
    userSchema.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,docs)=>{
        if(err){
            console.log('can not update');
        }else{
            res.render('edit',{slist:docs})
        }
    })
}

// for post the edit details

module.exports.editdetail = function(req,res){
  userSchema.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
    if(err){
        console.log('error');
    }else{
        res.redirect('/dashbord')
    }
  })
}

// for delete the data

module.exports.deleteStudent = function(req,res){
  userSchema.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
    if(err){
        console.log("error in delete")
    }else{
        res.redirect('/dashbord')
    }
  })
}



