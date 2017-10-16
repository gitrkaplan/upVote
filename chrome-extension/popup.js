document.addEventListener('DOMContentLoaded', function () {
  var addButton = document.getElementById('add-button')
  addButton.addEventListener('click', function () {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, tabs => {
      const tab = tabs[0]
      let url = tab.url
      console.log(url)
      // fetch
      fetch('http://localhost:3000/api/pages', {
        method: 'POST',
        body: '{"url":  "' + url + '" }',
        headers: { 'content-type': 'application/json' }
      }).then(res => {
        res = url
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    })
  })
})
