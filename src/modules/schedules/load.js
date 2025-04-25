import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value

  // Busca na API os agendamentos para carregar do lado direito da tela
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os horários disponíveis (horário futuro + não agendado) do lado esquedo (form)
  schedulesShow({ dailySchedules })

  // Renderiza as horas disponíveis
  hoursLoad({ date })
}