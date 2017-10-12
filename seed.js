const {
  MongoClient
} = require('mongodb')

MongoClient.connect('mongodb://localhost/updoot', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const pages = db.collection('pages')
  pages
    .deleteMany({})
    .then(() => pages.insertMany([{
      'author': 'Ellen Huet',
      'date': '2016-05-24T18:00:03.894Z',
      'description': 'The HR startups go to war.',
      'image': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioh_yWEn8gHo/v1/-1x-1.jpg',
      'publisher': 'Bloomberg.com',
      'title': 'As Zenefits Stumbles, Gusto Goes Head-On by Selling Insurance',
      'url': 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'
    },
    {
      'author': 'More Articles by Chase Allbee',
      'date': '2017-03-31T18:49:53.000Z',
      'description': 'It\'s been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all we\'ve listed our favorite CSS frameworks',
      'image': 'https://three29.com/wp-content/uploads/2017/03/Contstruction-e1490997182922.jpg',
      'publisher': 'Three29',
      'title': 'Best CSS Frameworks of 2017 | Three29',
      'url': 'https://three29.com/best-css-frameworks-2017/'
    },
    {
      'author': 'Ellen Huet',
      'date': '2016-05-24T18:00:03.894Z',
      'description': 'The HR startups go to war.',
      'image': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioh_yWEn8gHo/v1/-1x-1.jpg',
      'publisher': 'Bloomberg.com',
      'title': 'As Zenefits Stumbles, Gusto Goes Head-On by Selling Insurance',
      'url': 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'
    },
    {
      author: 'Etanuwoma Jude',
      date: '2017-09-20T07:00:00.000Z',
      description: 'Creating a simple REST API with expressJS in 5min',
      image: 'https://cdn.filestackcontent.com/rXw89KfCQIuvWal613HB',
      publisher: 'Codementor',
      title: 'Creating a simple REST API with expressJS in 5min | Codementor',
      url: 'https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq' }
    ]))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
    .then(() => console.log('Pages seeded!'))
    .then(() => db.close())
})
