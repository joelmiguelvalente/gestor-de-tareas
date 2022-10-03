import displayTasks from "./readTasks.js"
import { getLocal, setLocal } from "./localStorage.js"

const deleteIcon = (id) => {
   const i = document.createElement("i")
   i.className = "fas fa-trash-alt trashIcon icon"
   i.addEventListener('click', () => deleteTask(id))
   return i
}
const deleteTask = id => {
   const tasks = getLocal("tasks")
   const index = tasks.findIndex(item => item.id === id)
   tasks.splice(index, 1)
   setLocal("tasks", tasks)
   document.querySelector("[data-list]").innerHTML = ''
   displayTasks()
}

export default deleteIcon