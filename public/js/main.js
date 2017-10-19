const cards = document.getElementById('cards')

function createElement(tagName, attributes, children) {
  const $element = document.createElement(tagName)
  for (const key in attributes) {
    $element.setAttribute(key, attributes[key])
  }
  children.forEach(child => {
    child instanceof Node
      ? $element.appendChild(child)
      : $element.appendChild(document.createTextNode(child))
  })
  return $element
}

function renderCard({ image, title, description, tags, url, vote }) {
  const img = image
  let dataTags = tags.join(' ')
  if (img == null) {
    image = 'http://www.brianhilton.com.au/images/inventory/image-not-found-medium.gif'
  }

  const $card =
  createElement('div', { class: 'filter col s12 m6 l4', 'data-item-tags': dataTags }, [
    createElement('div', { class: 'hoverable card' }, [
      createElement('div', { class: 'card-image waves-effect waves-block waves-light' }, [
        createElement('img', { class: 'activator', src: image, alt: title }, [])
      ]),
      createElement('div', { class: 'card-content' }, [
        createElement('span', { class: 'truncate card-title activator grey-text text-darken-4' }, [title]),
        createElement('div', { class: 'row' }, [
          createElement('i', { class: 'col material-icons grey-text text-lighten-1' }, ['thumb_up']),
          createElement('p', {class: 'col'}, [vote])
        ])
      ]),
      createElement('div', { class: 'card-reveal' }, [
        createElement('span', { class: 'card-title grey-text text-darken-4' }, [
          title,
          createElement('i', { class: 'material-icons right' }, ['close'])
        ]),
        createElement('p', {}, [description]),
        createElement('a', { href: url, target: '_blank' }, ['Read article'])
      ])
    ])
  ])

  return $card
}

fetch('/api/pages')
  .then(
    response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status)
        return
      }
      response.json().then(data => {
        data.sort((a, b) => {
          const voteA = a.vote
          const voteB = b.vote
          if (voteA < voteB) {
            return 1
          }
          if (voteA > voteB) {
            return -1
          }
          return 0
        })
        data.forEach(object => {
          cards.appendChild(renderCard(object))
        })
      })
    }
  )
  .catch(err => {
    console.log('Fetch Error :-S', err)
  })

const filters = document.querySelectorAll('.filters')
for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', function () {
    filters[i].classList.toggle('red')
    filters[i].classList.toggle('grey')
    const tags = document.querySelectorAll('.filter')
    let currentFilter = (filters[i].dataset.tooltip)
    currentFilter = currentFilter.split(' ')
    tags.forEach(element => {
      let elements = element.dataset.itemTags
      elements = elements.split(' ')
      currentFilter.every(item => {
        if (!elements.includes(item)) {
          element.classList.toggle('hidden')
        }
      })
    })
  })
}
