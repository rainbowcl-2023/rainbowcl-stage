const editProfileButton = document.querySelector('#edit-profile-btn')
editProfileButton.addEventListener('click', (event) => {
  const editFilter = document.querySelector('#edit-profile-filter')
  const editSection = document.querySelector('#edit-profile-section')
  const body = document.querySelector('body')
  editFilter.classList.remove('none-profile-filter')
  editSection.style['animation'] = 'swipe-edit-section 0.4s ease forwards'
  body.style['overflow-y'] = 'hidden'
})

const closeEditButton = document.querySelector('#close-edit-btn')
closeEditButton.addEventListener('click', (event) => {
  const editFilter = document.querySelector('#edit-profile-filter')
  const editSection = document.querySelector('#edit-profile-section')
  const body = document.querySelector('body')
  editSection.style['animation'] = 'close-edit-section 0.4s ease forwards'
  setTimeout(() => editFilter.classList.add('none-profile-filter'), 0.5 * 1000)
  body.style['overflow-y'] = 'scroll' 
})