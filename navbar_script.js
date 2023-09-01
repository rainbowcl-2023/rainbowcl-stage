// ===================================== Handles the language popup
const languageSelect = document.querySelector('#language-select')
const selectedLanguage = document.querySelector('#selected-language')
const languageItems = document.querySelectorAll('#language-list li')

languageSelect.addEventListener('click', () => {
  const languageList = document.querySelector('#language-list')
  languageList.classList.toggle('show-list')
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

  selectedImage.src = newImage.src
  selectedSpan.innerHTML = languages[newSpan.innerHTML]
}))
