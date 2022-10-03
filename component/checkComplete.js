import { getLocal, setLocal } from "./localStorage.js"

const checkComplete = (id) => {
   const i = document.createElement("i")
   i.className = "far fa-check-square icon"
   i.addEventListener('click', evento => completeTask(evento, id))
   return i
}
const completeTask = (evento, id) => {
   const element = evento.target
   element.classList.toggle('fas')
   element.classList.toggle('completeIcon')
   element.classList.toggle('far')
   const tasks = getLocal("tasks")
   const index = tasks.findIndex(item => item.id === id)
   tasks[index]["complete"] = !tasks[index]["complete"]
   setLocal("tasks", tasks)
}

export default checkComplete