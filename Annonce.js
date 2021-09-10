const mongoose = require('mongoose')
const annonceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  userID:{
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
  },  categorie:{
    type: String,
    required: true
  }
})
 module.exports = mongoose.model('Annonce', annonceSchema)