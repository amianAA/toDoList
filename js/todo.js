
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var undoneButton = document.getElementById('undone-button');
  undoneButton.addEventListener('click', markUndone, false);
    
  var removeDoneButton = document.getElementById('remove-done');
  removeDoneButton.addEventListener('click', removeDone, false);
    
  var removeAllButton = document.getElementById('remove-all');
  removeAllButton.addEventListener('click', removeAll, false);

  

  function addToDoItem() {
      event.preventDefault();
      var newTask = document.getElementById('task');
      var whatToDo = document.getElementById('toDo');
      var newOption = document.createElement('option');
      newOption.innerText = newTask.value;
      whatToDo.appendChild(newOption);
      document.getElementById("task").value = "";
  }

  function markAsDone() {
    var seleccion = document.getElementById('toDo');
        var taskDone = seleccion.options[seleccion.selectedIndex].value;
    seleccion.options[seleccion.selectedIndex].remove();
    var itsDone = document.getElementById('done');
    var newOption = document.createElement('option');
    newOption.innerText = taskDone;
    itsDone.appendChild(newOption); 
  }  
 function markUndone() {
    var seleccion = document.getElementById('done');
        var taskDone = seleccion.options[seleccion.selectedIndex].value;
    seleccion.options[seleccion.selectedIndex].remove();
    var itsDone = document.getElementById('toDo');
    var newOption = document.createElement('option');
    newOption.innerText = taskDone;
    itsDone.appendChild(newOption); 
  }  
function removeDone() {
    var seleccion = document.getElementById('done');
    seleccion.innerHTML = '';
  }  
function removeAll() {
    var selecDone = document.getElementById('done');
    var selecToDo = document.getElementById('toDo');
    selecDone.innerHTML = '';
    selecToDo.innerHTML = '';
  }  
}






// window.onload = function() {
//   //init();
//   //ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN

//   var saveButton = document.getElementById('add-button');
//   saveButton.addEventListener('click', addToDoItem, false);

//   //OTRAS ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN 
 
//   //doSomethingElse();
//   // LAS FUNCIONES DE AÑADIR BORRAR .....
//   function addToDoItem() {
//     //LO QUE SEA
//     console.log("ADD BUTTON CLICKED!");
//   }

//   function markAsDone() {
//     //LO QUE SEA
//     console.log("DONE BUTTON CLICKED!");
//   }
//  };




