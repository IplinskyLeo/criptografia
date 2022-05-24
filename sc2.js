let code = document.querySelector('#code');
let uncode = document.querySelector('#uncode');
let saida = document.querySelector('#asaida');
let entrada = document.querySelector('#aentrada');
console.log(entrada.value)

// code.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('oi')
// })

code.addEventListener('click', () =>{
    saida.value = btoa(entrada.value);
});

uncode.addEventListener('click', () =>{
    saida.value = atob(saida.value);
});