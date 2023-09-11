const userBirthDay = document.querySelector('input[name="user-birth-day"]')
const userBirthMonth = document.querySelector('select[name="user-birth-month"]')
const userBirthYear = document.querySelector('select[name="user-birth-year"]')


window.addEventListener('load', () => {
  currentYear = new Date().getFullYear()
  for(let i = currentYear - 50; i <= currentYear; i++) {
    const newYear = `<option value="${i}">${i}<option>`
    userBirthYear.insertAdjacentHTML('beforeend', newYear)
  }
})