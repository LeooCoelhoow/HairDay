import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
  // Previne o comportamento de recarregar a page
  event.preventDefault()

  console.log("Enviado")
}