// 1- Pega a entrada do usuário
const entrada = document.querySelector('#entradaaa');
const code = document.querySelector('#code');
const uncode = document.querySelector('#uncode');
const saida = document.querySelector('#saida');
const chave = document.querySelector('#oRange');
const displayChave = document.querySelector('#botaoRange')
const cifra = document.getElementById('cifra')
const base64 = document.getElementById('base64')

const rangee = document.querySelector('#oRange')
// const displaye = document.querySelector('#botaoRange')

console.log(chave.value)

cifra.addEventListener('click', () =>{
    displayChave.style.display = 'flex';
    displayChave.style.flexDirection = 'column'
})
base64.addEventListener('click', () =>{
    displayChave.style.display = 'none'
})



// code.addEventListener("click", function(ee) {
// ee.preventDefault();
// })
// uncode.addEventListener("click", function(ee) {
//     ee.preventDefault();
//     })


// selecao do botao para ver qual metodo sera criptografado
document.getElementById('code').addEventListener ('click', function(e) {

    e.preventDefault()

    var botaoRadio = document.getElementsByName('selecao');
        // aqui vai a funcao de codificar em base64
        if (botaoRadio[0].checked) {


           
                saida.value = btoa(entrada.value);
        }

        // aqui vai a funcao de codificar em cifra de cesar
        else if (botaoRadio[1].checked){
            function hide(eee){
                document.getElementById("#botaoRange").style.display = "none";
            }
        // primeiro pegar o input da chave
        console.log (`voce escolheu a 2 opcao, cifra de cesar 
        sua chave é:${chave.value}`)}
        // segundo criptografar segundo a chave
})

document.getElementById('uncode').addEventListener ('click', function(e) {

        saida.value = atob(entrada.value);
    
})

    




