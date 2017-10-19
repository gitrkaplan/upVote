const express = require('express')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { ObjectId } = require('mongodb')
const metaScraper = require('metascraper')
const path = require('path')
const app = express()

MongoClient.connect('mongodb://localhost/updoot', (err, db) => {

  if (err) {
    console.error(err)
    process.exit(1)
  }

  const pages = db.collection('pages')
  app.use(jsonParser)
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
    console.log('Served the homepage.')
  })

  app.post('/api/pages', (req, res) => {
    const body = req.body
    let url = body.url
    let tags = body.tags
    pages.findOne({url: url}, (err, page) => {
      if (err) {
        console.error(err)
        res.sendStatus(500)
      }
      if (page !== null) {
        pages.findAndModify(
          { url: url },
          [],
          {$inc: {vote: 1},
            $set: {tags: tags}})
        return res.sendStatus(201)
      }
      metaScraper
        .scrapeUrl(url)
        .then((metadata) => {
          metadata.url = url
          return pages
            .insertOne(metadata)
            .then(pages.findAndModify(
              { url: url },
              [],
              {$set: {vote: 1, tags}},
              { new: true },
              (err, result) => {
                if (err) {
                  console.error(err)
                }
              }))
        })
        .catch(err => {
          console.error(err)
          res.sendStatus(500)
        })
        .then(() => {
          res.sendStatus(201)
        })
    })
  })

  app.get('/api/pages', (req, res) => {
    pages
      .find()
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
