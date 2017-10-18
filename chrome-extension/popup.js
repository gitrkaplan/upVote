document.addEventListener('DOMContentLoaded', function () {
  var addButton = document.getElementById('add-button')
  addButton.addEventListener('click', function () {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, tabs => {
      const tab = tabs[0]
      let url = tab.url
      fetch('http://localhost:3000/api/pages', {
        method: 'POST',
        body: '{"url":  "' + url + '" }',
        headers: { 'content-type': 'application/json' }
      }).catch(err => {
        console.error(err)
      })
    })
  })
})

// document.addEventListener('DOMContentLoaded', () => {
//   const html = document.getElementById('html')
//   html.addEventListener('click', () => {
//     if (html.classList.contains('grey')) {
//       html.classList.add('orange', 'darken-3')
//       html.classList.remove('grey')
//     }
//     else {
//       html.classList.add('grey')
//       html.classList.remove('orange', 'darken-3')
//     }
//   })
//   const css = document.getElementById('css')
//   css.addEventListener('click', () => {
//     css.classList.add('light-blue')
//     css.classList.remove('grey')
//   })
//   const javascript = document.getElementById('javascript')
//   javascript.addEventListener('click', () => {
//     javascript.classList.add('yellow')
//     javascript.classList.remove('grey')
//   })
//   const nodejs = document.getElementById('nodejs')
//   nodejs.addEventListener('click', () => {
//     nodejs.classList.add('light-green', 'darken-1')
//     nodejs.classList.remove('grey')
//   })
//   const express = document.getElementById('express')
//   express.addEventListener('click', () => {
//     express.classList.add('lighten-1')
//   })
//   const angularjs = document.getElementById('angularjs')
//   angularjs.addEventListener('click', () => {
//     angularjs.classList.add('red', 'darken-1')
//     angularjs.classList.remove('grey')
//   })
//   const react = document.getElementById('react')
//   react.addEventListener('click', () => {
//     react.classList.add('blue', 'lighten-1')
//     react.classList.remove('grey')
//   })
//   const mongodb = document.getElementById('mongodb')
//   mongodb.addEventListener('click', () => {
//     mongodb.classList.add('green', 'darken-1')
//     mongodb.classList.remove('grey')
//   })
//   const bootstrap = document.getElementById('bootstrap')
//   bootstrap.addEventListener('click', () => {
//     bootstrap.classList.add('deep-purple')
//     bootstrap.classList.remove('grey')
//   })
//   const git = document.getElementById('git')
//   git.addEventListener('click', () => {
//     git.classList.add('orange', 'darken-4')
//     git.classList.remove('grey')
//   })
//   const heroku = document.getElementById('heroku')
//   heroku.addEventListener('click', () => {
//     heroku.classList.add('deep-purple', 'lighten-3')
//     heroku.classList.remove('grey')
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.hoverable')
  const tagsToAdd = []
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function () {
      tags[i].classList.toggle('grey')
      tags[i].classList.toggle('red')
      tagsToAdd.push(tags[i].dataset.test)
      console.log(tagsToAdd)
    }, false)
  }
// If element already exists, remove it
})

// $('.sal').each(function(elem) {
//             $(this).click(function(e) {
//
//                  i.push($(this).val());

// Listen to the row for clicks.
// Determine if the clicked thing was icon.
// If not, return
// Toggle a selected class

// Enhance ADD Button listener to
// Query the list of icons
// Loop through them
// Build an array of tags for the "selected" tags

// Console log an array of clicked tags
