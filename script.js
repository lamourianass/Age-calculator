const btnEl = document.getElementById('btn')
const birthdayEl = document.getElementById('birthday')

function calculateAge() {
  const birthdayValue = birthdayEl.value

  if (birthdayValue === "") {
    alert("Please enter your birthday")
  } else {
    const age = getAge(birthdayValue)
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date()
  const birthdayDate = new Date(birthdayValue)

  const age = currentDate.getFullYear() - birthdayDate.getFullYear()
  const month = currentDate.getMonth() - birthdayDate.getMonth()

  if (month < 0 ||
    (month === 0 &&
      currentDate.getDate() < birthdayDate.getDate())) {
    age--
  }
}

btnEl.addEventListener('click', calculateAge)
