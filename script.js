
// =================================this handles the sticky scroll of the sidebar 
window.addEventListener('scroll', (e) => {
  
  const sidebar = document.querySelector('#fields-sidebar')
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  const offersWrapper = document.querySelector('#offers-wrapper')
  const offersWrapperRect = offersWrapper.getBoundingClientRect()
  const sidebarRect = sidebar.getBoundingClientRect()
  const headerRect = header.getBoundingClientRect()
  const footerRect = footer.getBoundingClientRect()




  if ((sidebarRect.top <=  (headerRect.top + headerRect.height)) && footerRect.top > window.innerHeight) {
    sidebar.style['position'] = 'fixed'
    sidebar.style['top'] = '12vh'
    sidebar.style['height'] = '90vh'
    sidebar.style['width'] = '16.66%'
    sidebar.style['left'] = '0'
  }

  if ((offersWrapperRect.top > (headerRect.top + headerRect.height)) || footerRect.top <= window.innerHeight) {
    sidebar.style['position'] = 'relative'
    sidebar.style['top'] = '0'
    sidebar.style['height'] = '100%'
    sidebar.style['width'] = 'unset'
  }
})

// =================================================Handles the login and signup popup
const connectionButtons = document.querySelectorAll('#option-menu > button')
connectionButtons.forEach( button => button.addEventListener('click', () => {
  const filter = document.querySelector(`#${button.value}-filter`)
  const form = document.querySelector(`#${button.value}-form`)
  filter.style['top'] = '0'
  filter.style['z-index'] = 200
  filter.style['opacity'] = 1
  form.style['z-index'] = 300

}))


// ================================================= Handles the closing of the login and signup forms

const closeButtons = document.querySelectorAll('.close-form-button')
closeButtons.forEach(button => button.addEventListener('click', () => {
  const filter = document.querySelector(`#${button.value}-filter`)
  const form = document.querySelector(`#${button.value}-form`)
  filter.style['top'] = '-100%'
  filter.style['z-index'] = 0
  filter.style['opacity'] = 0
  form.style['z-index'] = 0
  
}))



// =================================================this handles the swap action of the signup block
function handleNextBlock() {
  const block1 = document.querySelector('#block-1')
  const block2 = document.querySelector('#block-2')
  const followButton = document.querySelector('#follow-button')
  const signupButton = document.querySelector('#signup-button')

  if (block1.classList.contains('current')) {
    block1.style['left'] = '-120%'
    block1.classList.remove('current')

    block2.style['left'] = '0'
    block2.classList.add('current')

    followButton.innerHTML = '<< precedent'
    signupButton.style['visibility'] = 'visible'
    signupButton.setAttribute('disabled', false)
    signupButton.style['background-color'] = 'black'
  } else {
    block2.style['left'] = '120%'
    block2.classList.remove('current')

    block1.style['left'] = '0'
    block1.classList.add('current')

    followButton.innerHTML = 'suivant >>'
    signupButton.style['background-color'] = 'rgba(255, 255, 255, 0.211)'
    signupButton.setAttribute('disabled', true)
    signupButton.style['visibility'] = 'hidden'

  }
}

const followButton = document.querySelector('#follow-button') 
followButton.addEventListener('click', handleNextBlock)


// ===================================================== animate publicity slides
setInterval(() => {
  const currentElement = document.querySelector('.current')
  let nextElement = document.querySelector('.current + .pub-image')


  if (nextElement == null ) {
    nextElement = document.querySelector('.pub-image')
  }

  nextElement.classList.add('current')
  currentElement.classList.remove('current')

}, 5000)


document.querySelectorAll('#option-menu > button').forEach( element => {
  element.addEventListener('click', () => {
    const filter = document.querySelector(`#${element.value}-filter`)
    filter.style['z-index'] = '200'
    filter.style['top'] = 0
    filter.style['opacity'] = 1
    element.style['z-index'] = '300'
  })
})


// ========================================== Handle pagination
const pageButtons = document.querySelectorAll('.page-button')
const nextPageButton = document.querySelector('#next-page-btn')
const previousPageButton = document.querySelector('#previous-page-btn')

function hideOffers() {
  document.querySelectorAll('.offer-on-page').forEach(item => item.classList.remove('offer-on-page'))
}

function loadOffers(start, amount) {
  const offersList = document.querySelectorAll('.internship-card')

  if (offersList.length <= start) return 

  for(let i = 0; i < amount; i++) {
    offersList[start + i].classList.add('offer-on-page')
  }
}

function resetPageButtons(targetPageNumber) {
  const targetGroupNumber = Math.floor((targetPageNumber - 1) / pageButtons.length) + 1
  const currentGroupNumber = parseInt(document.querySelector("[name='current-btn-group']").value)
  const targetGroupStart = pageButtons.length * (targetGroupNumber - 1) + 1
  const currentGroupStart = pageButtons.length * (currentGroupNumber - 1) + 1

  for(let i = 0; i < pageButtons.length; i++) {
    const button = pageButtons[i]
    button.classList.replace(`btn-${i + currentGroupStart}`, `btn-${i + targetGroupStart}`)
    button.value = i + targetGroupStart
    button.innerHTML = i + targetGroupStart
  }

  document.querySelector("[name='current-btn-group']").value = targetGroupNumber
}

function goToPage(pageNumber) {

  if (pageNumber <= 0) return

  hideOffers()
  loadOffers(12 * (parseInt(pageNumber) - 1), 12)

  document.querySelector('.active-page-btn').classList.remove('active-page-btn')

  console.log('class: ', `.btn-${pageNumber}`)
  document.querySelector(`.btn-${pageNumber}`).classList.add('active-page-btn')

  nextPageButton.value = pageNumber + 1
  previousPageButton.value = pageNumber - 1
}


// first load the first 12 offers
window.addEventListener('load', () => {
  loadOffers(start=0, amount=12)
})

// what happens when a button is clicked
pageButtons.forEach( button => button.addEventListener('click', () => {
  resetPageButtons(parseInt(button.value))
  goToPage(parseInt(button.value))
}))

nextPageButton.addEventListener('click', () => {
  resetPageButtons(parseInt(nextPageButton.value))
  goToPage(parseInt(nextPageButton.value))
})

previousPageButton.addEventListener('click', () => {
  resetPageButtons(parseInt(previousPageButton.value))
  goToPage(parseInt(previousPageButton.value))
})