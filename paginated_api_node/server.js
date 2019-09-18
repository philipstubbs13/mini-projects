const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./users');

mongoose.connect('mongodb://localhost/pagination' , { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', async () => {
  if (await User.countDocuments().exec() > 0) return

  Promise.all([
    User.create({ name: 'User 1'}),
    User.create({ name: 'User 2'}),
    User.create({ name: 'User 3'}),
    User.create({ name: 'User 4'}),
    User.create({ name: 'User 5'}),
    User.create({ name: 'User 6'}),
    User.create({ name: 'User 7'}),
    User.create({ name: 'User 8'}),
    User.create({ name: 'User 9'}),
    User.create({ name: 'User 10'}),
    User.create({ name: 'User 11'}),
    User.create({ name: 'User 12'}),

  ]).then(() => console.log('Added Users'))
})

// const users = [
//   { id: 1, name: 'User1' },
//   { id: 2, name: 'User2' },
//   { id: 3, name: 'User3' },
//   { id: 4, name: 'User4' },
//   { id: 5, name: 'User5' },
//   { id: 6, name: 'User6' },
//   { id: 7, name: 'User7' },
//   { id: 8, name: 'User8' },
//   { id: 9, name: 'User9' },
//   { id: 10, name: 'User10' },
//   { id: 11, name: 'User11' },
//   { id: 12, name: 'User12' },
//   { id: 13, name: 'User13' },
// ]

// const posts = [
//   { id: 1, name: 'Post1' },
//   { id: 2, name: 'Post2' },
//   { id: 3, name: 'Post3' },
//   { id: 4, name: 'Post4' },
//   { id: 5, name: 'Post5' },
//   { id: 6, name: 'Post6' },
//   { id: 7, name: 'Post7' },
//   { id: 8, name: 'Post8' },
//   { id: 9, name: 'Post9' },
//   { id: 10, name: 'Post10' },
//   { id: 11, name: 'Post11' },
//   { id: 12, name: 'Post12' },
//   { id: 13, name: 'Post13' },
// ]

// app.get('/posts', paginatedResults(posts), (req, res) => {
//   res.json(res.paginatedResults);
// })

app.get('/users', paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults)
})

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < await model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0){
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }

    // results.results = model.slice(startIndex, endIndex)

    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec()
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({ message: e.message })
    }

    
    res.paginatedResults = results
    next();
  }
}

app.listen(3000);