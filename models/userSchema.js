const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    batch:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    email:{
        type: String,
        unique:true,
        required:true
    },
    phoneno:{
        type: Number,
       // unique:true,
        required:true
    },
    college:{
        type: String,
        required:true
    },
    placestatus:{
        type: String,
        required:true
    },
    dsa:{
        type: Number,
        required:true
    },
    web:{
        type: Number,
        required:true
    },
    react:{
        type: Number,
        required:true
    },
    interviews: [
        {
          cname: {
            type: String,
            required: true,
          },
          date: {
            type: String,
            required: true,
          },
          result: {
            type: String,
            enum: ["PASS", "FAIL", "Didn't Attempt", "On Hold"],
          },
        },
      ],
    },
    {
      timestamps: true,
    }
)
module.exports = mongoose.model('slist',studentSchema)