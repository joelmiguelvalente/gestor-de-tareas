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
   const tasks = JSON.parse(localStorage.getItem("tasks"))
   const index = tasks.findIndex(item => item.id === id)
   tasks[index]["complete"] = !tasks[index]["complete"]
   localStorage.setItem("tasks", JSON.stringify(tasks))
}

export default checkComplete