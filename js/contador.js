const contador = document.querySelector('#counter');

const aumentar = document.querySelector('#aumentar');
const disminiuir = document.querySelector('#disminiuir');

aumentar.addEventListener('click', ()=>{
    let n = parseInt(contador.textContent);
    n++;
    contador.textContent = n;
})

disminiuir.addEventListener('click', ()=>{
    let n = parseInt(contador.textContent);
    n--;
    contador.textContent = n;
})