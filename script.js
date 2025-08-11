const btnEl = document.getElementById('btn')
const birthdayEl = document.getElementById('birthday')

function calculateAge() {
  const birthdayValue = birthdayEl.value
  console.log(birthdayValue)
}

btnEl.addEventListener('click', calculateAge)
