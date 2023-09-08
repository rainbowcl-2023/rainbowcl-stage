// ===================================== Handles the language popup
const languageSelect = document.querySelector('#language-select')
const selectedLanguage = document.querySelector('#selected-language')
const languageItems = document.querySelectorAll('#language-list li')
const languageList = document.querySelector('#language-list')


languageSelect.addEventListener('blur', () => {
    languageList.classList.remove('show-list')
})

languageSelect.addEventListener('click', (event) => {
  if (!languageList.classList.contains('show-list')) {
    languageList.classList.add('show-list')
  }
})




languageItems.forEach(item => item.addEventListener('click', (event) => {
  const languages = {
    'Francais': 'Fr',
    'English': 'Eng'
  }

  const selectedImage = selectedLanguage.querySelector('img')
  const selectedSpan = selectedLanguage.querySelector('span')


  const newImage = event.target.querySelector('img')
  const newSpan = event.target.querySelector('span')


  event.stopPropagation()
  selectedImage.src = newImage.src
  selectedSpan.innerHTML = languages[newSpan.innerHTML]
  languageList.classList.remove('show-list')
}))

// ========================================== Handles the drop down menu button

const menuButton = document.querySelector('#dropdown-button')
const menuList = document.querySelector('#dropdown-list')


function morphToCloseButton() {
  const spanLines = menuButton.querySelectorAll('.dropdown-span')
  spanLines.forEach(item => {
    item.style['position'] = 'absolute'
  } )
  spanLines[0].style['rotate'] = '45deg'
  spanLines[0].style['width'] = '60%'
  spanLines[1].style['rotate'] = '-45deg'
  spanLines[1].style['width'] = '60%'
  spanLines[2].style['rotate'] = '45deg'
  spanLines[2].style['width'] = '60%'

  menuButton.classList.remove('menu-button')
}

function morphToMenuButton() {
  const spanLines = menuButton.querySelectorAll('.dropdown-span')
  spanLines.forEach(item => {
    item.style['position'] = 'relative'
    item.style['top'] = 'unset'
    item.style['left'] = 'unset'
    item.style['transform'] = 'unset'
    item.style['rotate'] = '0deg'
    item.style['width'] = '100%'
  } )

  menuButton.classList.add('menu-button')
}

menuButton?.addEventListener('blur', () => {
  morphToMenuButton()
  menuList.classList.remove('visible-menu')
})

menuButton?.addEventListener('click', (event) => {
  event.target.classList.contains('menu-button') ? morphToCloseButton() : morphToMenuButton()
  menuList.classList.toggle('visible-menu')
})
