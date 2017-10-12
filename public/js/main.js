const cards = document.getElementById('cards')

const renderCard = (img, title, description) => {
  const $cardContainer = document.createElement('div')
  $cardContainer.classList.add('col', 's12', 'm6', 'l4')

  const $card = document.createElement('div')
  $card.classList.add('hoverable', 'card')

  const $cardImageContainer = document.createElement('div')
  $cardImageContainer.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light')

  const $cardImage = document.createElement('img')
  $cardImage.classList.add('activator')
  $cardImage.src = 'https://three29.com/wp-content/uploads/2017/03/Contstruction-e1490997182922.jpg'

  const $cardContent = document.createElement('div')
  $cardContent.classList.add('card-content')

  const $span = document.createElement('span')
  $span.classList.add('truncate', 'card-title', 'activator', 'grey-text', 'text-darken-4')
  $span.textContent = 'Best CSS Frameworks of 2017 | Three29'

  const $favorite = document.createElement('i')
  $favorite.classList.add('material-icons', 'red-text', 'text-darken-1')
  $favorite.textContent = 'favorite'

  const $cardReveal = document.createElement('div')
  $cardReveal.classList.add('card-reveal')

  const $span2 = document.createElement('span')
  $span2.classList.add('card-title', 'grey-text', 'text-darken-4')
  $span2.textContent = 'Best CSS Frameworks of 2017 | Three29'

  const $icon2 = document.createElement('i')
  $icon2.classList.add('material-icons', 'right')
  $icon2.textContent = 'close'

  $span2.appendChild($icon2)

  const $description = document.createElement('p')
  $description.textContent = 'Its been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all weve listed our favorite CSS frameworks Its been a busy time for front end developers and 2017 looks to be more of the same. To help sort through it all weve listed our favorite CSS frameworks'

  $cardContainer.appendChild($card)
  $card.appendChild($cardImageContainer)
  $cardImageContainer.appendChild($cardImage)
  $card.appendChild($cardContent)
  $cardContent.appendChild($span)
  $cardContent.appendChild($favorite)
  $card.appendChild($cardReveal)
  $cardReveal.appendChild($span2)
  $cardReveal.appendChild($description)

  return $cardContainer
}

cards.appendChild(renderCard())

fetch('/api/pages')
  .then(
    response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status)
        return
      }
      response.json().then(data => {
        console.log(data)
      })
    }
  )
  .catch(err => {
    console.log('Fetch Error :-S', err)
  })
