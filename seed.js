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
      'url': 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance',
      'vote': 5
    },
    {
      'author': 'More Articles by Chase Allbee',
      'date': '2017-03-31T18:49:53.000Z',
      'description': 'It\'s been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all we\'ve listed our favorite CSS frameworks',
      'image': 'https://three29.com/wp-content/uploads/2017/03/Contstruction-e1490997182922.jpg',
      'publisher': 'Three29',
      'title': 'Best CSS Frameworks of 2017 | Three29',
      'url': 'https://three29.com/best-css-frameworks-2017/',
      'vote': 5
    },
    {
      author: 'Etanuwoma Jude',
      date: '2017-09-20T07:00:00.000Z',
      description: 'Creating a simple REST API with expressJS in 5min',
      image: 'https://cdn.filestackcontent.com/rXw89KfCQIuvWal613HB',
      publisher: 'Codementor',
      title: 'Creating a simple REST API with expressJS in 5min | Codementor',
      url: 'https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq',
      vote: 5
    },
    {
      author: '10153268557930902',
      date: '2017-01-14T19:55:20.206Z',
      description: 'The MEAN stack is used to describe development using MongoDB, Express.js, Angular.jS and Node.js. In this tutorial I will show you how to…',
      image: 'https://cdn-images-1.medium.com/max/1200/1*SnbD3H3BVGB0wPaZHuI_aw.jpeg',
      publisher: 'codeburst',
      title: 'Using Node.js & Express.js to save data to MongoDB Database',
      url: 'https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073',
      vote: 5
    },
    {
      author: 'Jeff Andersenblockedunblockfollowfollowingco-founder @manifoldco. Formerly @goinstant (acquired @salesforce ‘12).jan 29, 2015',
      date: '2015-01-30T02:46:24.000Z',
      description: 'Part 1: What is a REST API anyway?',
      image: 'https://cdn-images-1.medium.com/max/1200/1*k0u7bbZal3fIbVbRzDjhCA.jpeg',
      publisher: 'Medium',
      title: 'Building a Node.js REST API with Express – Jeff Andersen – Medium',
      url: 'https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6',
      vote: 5
    },
    {
      author: 'Node.js Foundation',
      date: null,
      description: 'The purpose of this guide is to impart a solid understanding of the process of\nNode.js HTTP handling. We\'ll assume that you know, in a general sense, how HTTP\nrequests work, regardless of language or programming environment. We\'ll also\nassume a bit of familiarity with Node.js EventEmitters and Streams.\nIf you\'re not quite familiar with them, it\'s worth taking a quick read through\nthe API docs for each of those.',
      image: null,
      publisher: 'Node.js',
      title: 'Anatomy of an HTTP Transaction | Node.js',
      url: 'https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/',
      vote: 5
    },
    {
      '_id': '59e2771830eaa515be906dc4',
      'author': 'Reactdom@reactdom·50m#reactjs #reactnative #graphql Newsletter Issue 55 #redux #indiedev #nodejs #webpack #reactrouter #react Https://t.co/fufdh2mbuvreply on Twitterretweet on Twitterlike on Twittertwitter',
      'date': '2017-10-07T18:24:00.000Z',
      'description': 'Last updated on October 12th, 2017Meteor (also known as MeteorJS) is a free and open-source isomorphic JavaScript web framework. It is written in Node.js. Meteor was first introduced in 2012 and is developed by the Meteor Development Group. Meteor allows for rapid prototyping and produces cross-platform code. Meteor integrates with MongoDB. It uses the Distributed…',
      'image': 'https://reactdom.com/wp-content/uploads/2017/10/ReactDOM-Meteor-tutorials-books-e1507852904365.png',
      'publisher': 'ReactDOM',
      'title': 'Best Meteor books, courses, tutorials & videos 2017 - ReactDOM',
      'url': 'https://reactdom.com/blog/meteor-books',
      vote: 5
    }
    ]))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
    .then(() => console.log('Pages seeded!'))
    .then(() => db.close())
})
