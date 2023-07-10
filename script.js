let toDoContainer = document.getElementById('toDoContainer')
let addToDoButton = document.getElementById('addToDo')
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    var para = document.createElement('p');
    para.classList.add('paragraph-styling')
    para.innerHTML = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    })
})