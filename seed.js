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
      '_id': '59e8f03adfc9d1637a6c2da6',
      'author': null,
      'date': '2012-08-14T19:00:00.000Z',
      'description': 'Yearofmoo is a blog intended to supercharge the abilities of programmers everywhere.',
      'image': 'http://www.yearofmoo.com/images/mookins/cover/dragon.png',
      'publisher': 'yearofmoo',
      'tags': [
        'angularjs'
      ],
      'title': 'Use AngularJS to Power Your Web Application - yearofmoo.com',
      'url': 'https://www.yearofmoo.com/2012/08/use-angularjs-to-power-your-web-application.html',
      'vote': 1
    },
    {
      'author': 'More Articles by Chase Allbee',
      'date': '2017-03-31T18:49:53.000Z',
      'description': 'It\'s been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all we\'ve listed our favorite CSS frameworks',
      'image': 'https://three29.com/wp-content/uploads/2017/03/Contstruction-e1490997182922.jpg',
      'publisher': 'Three29',
      tags: [
        'heroku',
        'nodejs'
      ],
      'title': 'Best CSS Frameworks of 2017 | Three29',
      'url': 'https://three29.com/best-css-frameworks-2017/',
      'vote': 1
    },
    {
      author: 'Etanuwoma Jude',
      date: '2017-09-20T07:00:00.000Z',
      description: 'Creating a simple REST API with expressJS in 5min',
      image: 'https://cdn.filestackcontent.com/rXw89KfCQIuvWal613HB',
      publisher: 'Codementor',
      tags: [
        'html',
        'git'
      ],
      title: 'Creating a simple REST API with expressJS in 5min | Codementor',
      url: 'https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq',
      vote: 1
    },
    {
      author: '10153268557930902',
      date: '2017-01-14T19:55:20.206Z',
      description: 'The MEAN stack is used to describe development using MongoDB, Express.js, Angular.jS and Node.js. In this tutorial I will show you how to…',
      image: 'https://cdn-images-1.medium.com/max/1200/1*SnbD3H3BVGB0wPaZHuI_aw.jpeg',
      publisher: 'codeburst',
      tags: [
        'nodejs',
        'expressjs'
      ],
      title: 'Using Node.js & Express.js to save data to MongoDB Database',
      url: 'https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073',
      vote: 3
    },
    {
      author: 'Jeff Andersenblockedunblockfollowfollowingco-founder @manifoldco. Formerly @goinstant (acquired @salesforce ‘12).jan 29, 2015',
      date: '2015-01-30T02:46:24.000Z',
      description: 'Part 1: What is a REST API anyway?',
      image: 'https://cdn-images-1.medium.com/max/1200/1*k0u7bbZal3fIbVbRzDjhCA.jpeg',
      publisher: 'Medium',
      tags: [
        'nodejs',
        'expressjs'
      ],
      title: 'Building a Node.js REST API with Express – Jeff Andersen – Medium',
      url: 'https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6',
      vote: 7
    },
    {
      '_id': '59e902cf7d7aaa64f04d983d',
      'author': null,
      'date': null,
      'description': 'AngularJS is an incredibly powerful framework but sometimes it can be confusing and frustrating trying to figure out how all of these amazing features actually fit together. In this series, you will learn how to build a non-trivial AngularJS application from the ground up through a series of small, digestible lessons. \nAs we build out our sample application, Eggly, you will quickly start to identify useful techniques that you can apply to your own projects.  The videos series is broken out into three series so that you can start at whatever level is most appropriate for you.\nGetting Started\nIn this first series, we are going to focus on the absolute essentials for getting an AngularJS application up and running. We will start with a static HTML page and learn how to bootstrap an AngularJS application and add in functionality using AngularJS views and controllers. When we complete this section, you will have a functioning Eggly application where you can create, update and delete bookmarks and filter them based on the selected bookmark category. \nDont miss Part 2: Application Architecture (https://egghead.io/series/angularjs-application-architecture)!',
      'image': 'https://d2eip9sf3oo6c2.cloudfront.net/tech/defaults/course_image_full_angularjs.png',
      'publisher': 'egghead.io',
      'tags': [
        'angularjs'
      ],
      'title': 'AngularJS Fundamentals - Course by @simpulton',
      'url': 'https://egghead.io/courses/angularjs-fundamentals',
      'vote': 1
    }
    ]))
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
    .then(() => console.log('Pages seeded!'))
    .then(() => db.close())
})
