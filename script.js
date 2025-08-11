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

function getAge() {
  
}

btnEl.addEventListener('click', calculateAge)
