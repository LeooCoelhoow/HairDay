import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value

  // Renderiza as horas disponíveis
  hoursLoad({ date })
  
  // Busca na API os agendamentos para carregar do lado direito da tela


  // os horários disponíveis (horário futuro + não agendado) do lado esquedo (form)

}