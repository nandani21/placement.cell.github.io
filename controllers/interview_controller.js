const Interview = require("../models/interviewSchema");

// renders the addInterview page
module.exports.addInterview = function(req, res){
    return res.render("interview");
}

// for create a new interview setup

module.exports.create = async (req, res) => {
    try {
      const { cname, name, result, date } = req.body;
  
      await Interview.create(
        {
          cname,
          name,
          result,
          date,
        },
        (err, Interview) => {
          if (err) {
            console.log("error in save data")
            return res.redirect("back");
          }
          return res.redirect("back");
        }
      );
    } catch (err) {
      console.log(err);
    }
};


//show the interview data

module.exports.showinterview = function(req,res){
    Interview.find((err,docs)=>{
        if(err){
            console.log('error')
        }
        
        res.render('interviewlist',{
            ilists : docs
        })
    })
  }