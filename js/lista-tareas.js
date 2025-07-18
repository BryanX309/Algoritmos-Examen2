const BtnAgregar = document.querySelector('#agregar');


BtnAgregar.addEventListener('click', ()=>{

    const nuevaTarea = document.querySelector('#taskInput');
    const lista = document.querySelector('#taskList');

    if(nuevaTarea.value !== ''){
        const tarea = `<li>${nuevaTarea.value}</li>\n`;
        lista.innerHTML = lista.innerHTML.concat(tarea);
        nuevaTarea.value = '';
    }
    else{
        alert('No se puede ingresar tareas vacías');        
    }
})