const mongoose = require('mongoose')
const consigneSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default:'description'
  }, creationDate:{
    type: Date,
    required: true,
    default:Date.now
  }, categorie:{
    type: String,
    required: true
  }
})
 module.exports = mongoose.model('Consigne', consigneSchema)