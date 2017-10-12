const express = require('express')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { ObjectId } = require('mongodb')
const metaScraper = require('metascraper')
const path = require('path')

MongoClient.connect('mongodb://localhost/updoot', (err, db) => {

  if (err) {
    console.error(err)
    process.exit(1)
  }

  const pages = db.collection('pages')
  const app = express()
  app.use(jsonParser)
  app.use(express.static('public'))

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
    console.log('Served the homepage.')
  })

  app.post('/api/pages', (req, res) => {
    pages
      .insertOne(req.body, (err, result) => {
        if (err) {
          console.error(err)
          res.sendStatus(500)
        }
        console.log(req.body)
        res.sendStatus(201)
      })
  })

  app.get('/api/pages', (req, res) => {
    pages
      .find(req.query)
      .toArray()
      .then(list => res.json(list))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })

  app.listen(3000, () => {
    console.log('Visit http://localhost:3000')
  })

})
