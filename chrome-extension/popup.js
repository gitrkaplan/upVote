document.addEventListener('DOMContentLoaded', () => {
  var addButton = document.getElementById('add-button')
  addButton.addEventListener('click', function () {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, tabs => {
      const tab = tabs[0]
      let url = tab.url
      getSelectedTags()
      url = JSON.stringify({'url': url})
      console.log(url, tags)
      fetch('http://localhost:3000/api/pages', {
        method: 'POST',
        body: url,
        headers: { 'content-type': 'application/json' }
      }).catch(err => {
        console.error(err)
      })
    })
    selectedTags = []
    setTimeout(() => {
      window.close()
    }, 500)
  })
  const tags = document.querySelectorAll('.tags')
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function () {
      tags[i].classList.toggle('grey')
      tags[i].classList.toggle('red')
      tags[i].classList.toggle('clicked')
    })
  }
})

let selectedTags = []
const getSelectedTags = () => {
  const tags = document.querySelectorAll('.tags')
  tags.forEach(element => {
    if (element.classList.contains('clicked')) {
      selectedTags.push(element.dataset.language)
    }
  })
}
// Listen to the row for clicks.
// Determine if the clicked thing was icon.
// If not, return
// Toggle a selected class

// Enhance ADD Button listener to
// Query the list of icons
// Loop through them
// Build an array of tags for the 'selected' tags

// Console log an array of clicked tags
