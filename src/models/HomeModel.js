const moongose = require('mongoose')

const HomeSchema = new moongose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const HomeModel = moongose.model('Home', HomeSchema);

module.exports = HomeModel

// class Home {} module.exports = Home