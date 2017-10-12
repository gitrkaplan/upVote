const cards = document.getElementById('cards')

// const renderCard = (img, title, description) => {
//   const $cardContainer = document.createElement('div')
//   $cardContainer.classList.add('col', 's12', 'm6', 'l4')
//
//   const $card = document.createElement('div')
//   $card.classList.add('hoverable', 'card')
//
//   const $cardImageContainer = document.createElement('div')
//   $cardImageContainer.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light')
//
//   const $cardImage = document.createElement('img')
//   $cardImage.classList.add('activator')
//   $cardImage.src = 'https://three29.com/wp-content/uploads/2017/03/Contstruction-e1490997182922.jpg'
//
//   const $cardContent = document.createElement('div')
//   $cardContent.classList.add('card-content')
//
//   const $span = document.createElement('span')
//   $span.classList.add('truncate', 'card-title', 'activator', 'grey-text', 'text-darken-4')
//   $span.textContent = 'Best CSS Frameworks of 2017 | Three29'
//
//   const $favorite = document.createElement('i')
//   $favorite.classList.add('material-icons', 'red-text', 'text-darken-1')
//   $favorite.textContent = 'favorite'
//
//   const $cardReveal = document.createElement('div')
//   $cardReveal.classList.add('card-reveal')
//
//   const $span2 = document.createElement('span')
//   $span2.classList.add('card-title', 'grey-text', 'text-darken-4')
//   $span2.textContent = 'Best CSS Frameworks of 2017 | Three29'
//
//   const $icon2 = document.createElement('i')
//   $icon2.classList.add('material-icons', 'right')
//   $icon2.textContent = 'close'
//
//   $span2.appendChild($icon2)
//
//   const $description = document.createElement('p')
//   $description.textContent = 'Its been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all weve listed our favorite CSS frameworks Its been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all weve listed our favorite CSS frameworks'
//
//   $cardContainer.appendChild($card)
//   $card.appendChild($cardImageContainer)
//   $cardImageContainer.appendChild($cardImage)
//   $card.appendChild($cardContent)
//   $cardContent.appendChild($span)
//   $cardContent.appendChild($favorite)
//   $card.appendChild($cardReveal)
//   $cardReveal.appendChild($span2)
//   $cardReveal.appendChild($description)
//
//   return $cardContainer
// }
//
// cards.appendChild(renderCard())
// cards.appendChild(renderCard())

// fetch('/api/pages')
//   .then(
//     response => {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status)
//         return
//       }
//       response.json().then(data => {
//         console.log(data)
//       })
//     }
//   )
//   .catch(err => {
//     console.log('Fetch Error :-S', err)
//   })

const card =
  {
    '_id': '59def2fe34796424efd4165d',
    'author': 'Ellen Huet',
    'date': '2016-05-24T18:00:03.894Z',
    'description': 'The HR startups go to war.',
    'image': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioh_yWEn8gHo/v1/-1x-1.jpg',
    'publisher': 'Bloomberg.com',
    'title': 'As Zenefits Stumbles, Gusto Goes Head-On by Selling Insurance',
    'url': 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'
  }

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

function renderCard({ image, title, description }) {

  const $card =
  createElement('div', { class: 'col s12 m6 l4' }, [
    createElement('div', { class: 'hoverable card' }, [
      createElement('div', { class: 'card-image waves-effect waves-block waves-light' }, [
        createElement('img', { class: 'activator', src: image, alt: title }, []),
        createElement('img', { class: 'card-img-top', src: image, alt: title }, [])
      ]),
      createElement('div', { class: 'card-content' }, [
        createElement('span', { class: 'truncate card-title activator grey-text text-darken-4' }, ['title']),
        createElement('i', { class: 'material-icons red-text text-darken-1' }, ['favorite'])
      ]),
      createElement('div', { class: 'card-reveal' }, [
        createElement('span', { class: 'card-title grey-text text-darken-4' }, [
          title,
          createElement('i', { class: 'material-icons right' }, ['close'])
        ]),
        createElement('p', {}, [title])
      ])
    ])
  ])

  return $card
}
