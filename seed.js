const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost/updoot', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const pages = db.collection('pages')
  pages
    .deleteMany({})
    .then(() => pages.insertMany([
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
        'author': 'Ellen Huet',
        'date': '2016-05-24T18:00:03.894Z',
        'description': 'The HR startups go to war.',
        'image': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioh_yWEn8gHo/v1/-1x-1.jpg',
        'publisher': 'Bloomberg.com',
        'title': 'As Zenefits Stumbles, Gusto Goes Head-On by Selling Insurance',
        'url': 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'
      },
      {
        'author': 'Ellen Huet',
        'date': '2016-05-24T18:00:03.894Z',
        'description': 'The HR startups go to war.',
        'image': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioh_yWEn8gHo/v1/-1x-1.jpg',
        'publisher': 'Bloomberg.com',
        'title': 'As Zenefits Stumbles, Gusto Goes Head-On by Selling Insurance',
        'url': 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'
      }
    ]))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
    .then(() => console.log('Pages seeded!'))
    .then(() => db.close())
})
