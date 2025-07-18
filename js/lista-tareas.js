const BtnAgregar = document.querySelector('#agregar');


BtnAgregar.addEventListener('click', ()=>{

    const nuevaTarea = document.querySelector('#taskInput').value || '';
    const lista = document.querySelector('#taskList');

    if(nuevaTarea !== ''){
        const tarea = `<li>${nuevaTarea}</li>\n`;
        lista.innerHTML = lista.innerHTML.concat(tarea);
    }
    else{
        alert('No se puede ingresar tareas vacías');        
    }
})