const generar = document.querySelector('#generar-tabla')

generar.addEventListener('click', ()=>{
    const n = parseFloat(document.querySelector('#number').value);
    const limite = parseFloat(document.querySelector('#limit').value);

    let resultado = '';

    if(Number.isInteger(n) && Number.isInteger(limite) && limite >=1){
        for (let i = 1; i <= limite; i++) {
            resultado = resultado.concat(`${n} x ${i} = ${n*i}\n`);
        }
        document.querySelector('#result').textContent= resultado;
    }else{
        alert('los números ingresados deben ser enteros y Mayores a 1\nIntente Otra Vez');
    }
})