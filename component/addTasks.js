import checkComplete from "./checkComplete.js"
import deleteIcon from "./deleteIcon.js"
import displayTasks from "./readTasks.js"
import { getLocalEmpty, setLocal } from "./localStorage.js"

const __Create = (el, addClass = '') => {
   const newEl = document.createElement(el)
   if(addClass !== '') newEl.classList.add(addClass)
   return newEl;
}

export const addTask = __Event => {
   __Event.preventDefault()
   const list = document.querySelector("[data-list]")
   const input = document.querySelector("[data-form-input]")
   const calendario = document.querySelector("[data-form-date]")
   //
   const value = input.value
   const date = calendario.value
   const dateFormat = moment(date).format("DD/MM/YYYY")
   // Vaciamos campos
   
   if(value === '' || date === '') return;
   input.value = ''
   calendario.value = ''
   list.innerHTML = ''
   // Manipular datos inputs
   const complete = false;
   const taskObj = { value, dateFormat, complete, id: uuid.v4() }

   const tasksList = getLocalEmpty("tasks")
   tasksList.push(taskObj)
   setLocal("tasks", tasksList)
   //
   displayTasks()
   
}

export const createTask = ({value, dateFormat, complete, id}) => {
   const task = __Create("li", "card") // Crear li.card
   const taskContent = __Create("div") // Crear div
   const titleTask = __Create("span", "task") // Crear span.task
   titleTask.innerHTML = value
   // Checar
   const check = checkComplete(id)
   if(complete) {
      check.classList.toggle('fas')
      check.classList.toggle('completeIcon')
      check.classList.toggle('far')
   }
   // Insertamos elementos
   taskContent.appendChild(check)
   taskContent.appendChild(titleTask)
   task.appendChild(taskContent)
   task.appendChild(deleteIcon(id))

   return task;
}

export default addTask