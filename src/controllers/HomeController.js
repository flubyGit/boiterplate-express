// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   title: 'Second Todo',
//   description: 'Todo second with create using express and mongodb'
// }).then(data => console.log(data)).catch(err => console.log(err))
// HomeModel.find().then(data => console.log(data)).catch(err => console.log(err))

exports.index = (req,res, next) => {
  res.render('index') // Renderiza o template
  
  return
}

exports.store = (req,res) => {
  res.send('Post')
}