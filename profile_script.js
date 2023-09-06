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
  setTimeout(() => editFilter.classList.add('none-profile-filter'), 0.4 * 1000)
  body.style['overflow-y'] = 'scroll' 
})

const editProfilePhotoInput = document.querySelector('#edit-profile-photo-input')
editProfilePhotoInput.addEventListener('change', (event) => {
  const profilePhoto = document.querySelector('#edit-profile-wrapper > img')
  profilePhoto.src = URL.createObjectURL(event.target.files[0])
})

const editCoverPhotoInput = document.querySelector('#edit-cover-photo-input')
editCoverPhotoInput.addEventListener('change', (event) => {
  const coverPhoto = document.querySelector('#edit-cover-wrapper > img')
  coverPhoto.src = URL.createObjectURL(event.target.files[0])
})