const mongoose = require('mongoose');
const schema = mongoose.Schema;
const interviewSchema = new schema({
    cname:{
        type:String,
        required:true
    },
    name:{
      type:String,
      required:true
    },
    result:{
      type:String,
      required:true
    },
    date:{
        type:String,
        required:true
    }
  })

module.exports = mongoose.model('ilist',interviewSchema)