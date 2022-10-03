import displayTasks from "./readTasks.js"

const deleteIcon = (id) => {
   const i = document.createElement("i")
   i.className = "fas fa-trash-alt trashIcon icon"
   i.addEventListener('click', () => deleteTask(id))
   return i
}
const deleteTask = id => {
   const tasks = JSON.parse(localStorage.getItem("tasks"))
   const index = tasks.findIndex(item => item.id === id)
   tasks.splice(index, 1)
   localStorage.setItem("tasks", JSON.stringify(tasks))
   document.querySelector("[data-list]").innerHTML = ''
   displayTasks()
}

export default deleteIcon