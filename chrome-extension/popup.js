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
      const tags = selectedTags
      let data = {
        'url': url,
        'tags': tags
      }
      console.log(url, tags)
      fetch('http://localhost:3000/api/pages', {
        method: 'POST',
        body: JSON.stringify(data),
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
