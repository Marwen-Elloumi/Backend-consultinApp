const mongoose = require('mongoose')
const partenaireSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String
  },
  tel:{
    type: String
  },
  address:{
    type: String
  },
  creationDate:{
    type: Date,
    required: true,
    default:Date.now
  },
  type:{
    type: String,
    required: true
  },
  description:{
    type: String
  }
})  

module.exports = mongoose.model('Partenaire', partenaireSchema)