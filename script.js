// 1- Pega a entrada do usuário
const entrada = document.querySelector('#entradaaa');
const code = document.querySelector('#code');
const uncode = document.querySelector('#uncode');
const saida = document.querySelector('#saida');
const chave = document.querySelector('#oRange');
const displayChave = document.querySelector('#botaoRange')
const cifra = document.getElementById('cifra')
const base64 = document.getElementById('base64')
var botaoRadio = document.getElementsByName('selecao');

const rangee = document.querySelector('#oRange')
// const displaye = document.querySelector('#botaoRange')

cifra.addEventListener('click', () =>{
    displayChave.style.display = 'flex';
    displayChave.style.flexDirection = 'column'
})
base64.addEventListener('click', () =>{
    displayChave.style.display = 'none'
})



// selecao do botao para ver qual metodo sera criptografado
document.getElementById('code').addEventListener ('click', function(e) {
    e.preventDefault()

    
        // aqui vai a funcao de codificar em base64
        if (botaoRadio[0].checked) {
                saida.value = btoa(entrada.value);
        }

        // aqui vai a funcao de codificar em cifra de cesar
        else if (botaoRadio[1].checked){
            function hide(){
                document.getElementById("#botaoRange").style.display = "none";
            }
        // primeiro pegar o input da chave
        console.log (`voce escolheu a 2 opcao, cifra de cesar 
        sua chave é:${chave.value}`)
    
        if (chave.value == 0){
            alert('entrada invalida! Por favor selecione um número.')}
    
            cifraCesar()
            function cifraCesar(){
                const entradaz = document.querySelector('#entradaaa');
                // let chave = 1;
                let saida = ''
            
                for (let i = 0; i < entradaz.length; i++) {
                    saida += String.fromCharCode((entradaz.charCodeAt(i) + chave - 65) % 26 + 65); 
                } 
                console.log(entrada.value)
                console.log(saida.value)
            }
    }

})

document.getElementById('uncode').addEventListener ('click', function(e) {

    if (botaoRadio[0].checked) {
        try {
            saida.value = atob(entrada.value);
        } catch (error) {
            alert('Digite seu texto codificado em base 64!')
        }
        }
        
        
    
})






