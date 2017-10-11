var masonry = new Macy({
 container: '#macy-container',
 trueOrder: false,
 waitForImages: true,
 debug: true,
 margin: {
     x: 10,
     y: 10
 },
 columns: 6,
 breakAt: {
   1200: {
     columns: 5,
     margin: {
         x: 23,
         y: 4
     }
   },
   940: {
     margin: {
         y: 23
     }
   },
   520: {
     columns: 3,
     margin: 3,
   },
   400: {
     columns: 2
   }
 }
})
