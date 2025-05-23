"use strict"

// Configuração do dayjs
import "./libs/dayjs.js"

// CSS
import "./styles/global.css"
import "./styles/form.css"
import "./styles/schedule.css"

import dayjs from "dayjs"
console.log(dayjs().format("DD/MM HH:mm"))

// JS
import "./modules/form/submit.js" // Importando o evento de submit do formulário
import "./modules/form/date-change.js"
import "./modules/schedules/cancel.js"

import "./modules/page-load.js"