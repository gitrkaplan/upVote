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

function renderCard({ image, title, description, url, vote }) {

  const img = image

  if (img == null) {
    image = 'http://www.brianhilton.com.au/images/inventory/image-not-found-medium.gif'
  }

  const $card =
  createElement('div', { class: 'col s12 m6 l4' }, [
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
        data.forEach(object => {
          cards.appendChild(renderCard(object))
        })
      })
    }
  )
  .catch(err => {
    console.log('Fetch Error :-S', err)
  })
