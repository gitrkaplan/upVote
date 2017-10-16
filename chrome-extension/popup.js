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
