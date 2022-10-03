import addTask from './component/addTasks.js';  
import displayTasks from './component/readTasks.js';
(() => {

   document.querySelector("[data-form-btn]").onclick = addTask

   displayTasks()

})()