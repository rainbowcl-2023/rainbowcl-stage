const editProfileButton = document.querySelector('#edit-profile-btn')
editProfileButton.addEventListener('click', (event) => {
  const editFilter = document.querySelector('#edit-profile-filter')
  const editSection = document.querySelector('#edit-profile-section')
  const body = document.querySelector('body')
  editFilter.classList.remove('none-profile-filter')
  editSection.style['right'] = '100%'
  editSection.style['animation'] = 'swipe-edit-section 0.4s ease forwards'
  body.style['overflow'] = 'hidden'
})