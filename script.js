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



// selecao do botao que vai criptografar.
document.getElementById('code').addEventListener ('click', function(e) {
    e.preventDefault()
        //codificar em base64.
        if (botaoRadio[0].checked) {
                saida.value = btoa(entrada.value);
        }


        //codificar em cifra de cesar.
        else if (botaoRadio[1].checked){

            function hide(){
                document.getElementById("#botaoRange").style.display = "none";
            }

        console.log (`""voce escolheu a 2 opcao, cifra de cesar 
        sua chave é:${chave.value}`)
    
        if (chave.value == 0){
            alert('entrada invalida! Por favor selecione um número.')
        }
    }
    cifraCesar()
    function cifraCesar(){
        let entrada = document.querySelector('#entradaaa').value;
        let saida = '';
        const chave2 = parseInt(rangee.value);
        
        console.log (`Voce escolheu a 2 opcao, cifra de cesar 
        sua chave é:${chave2}`)

        // formula: ( codLetra + Desloc ) % TamAlfabeto
        // dps tentar fazer com split>loop>append (ideia alternativa) p ver se é possivel
            if (entrada == entrada.toUpperCase()){
        for (let i = 0; i < entrada.length; i++) {
            saida += String.fromCharCode((entrada.charCodeAt(i) + chave2 - 65) % 26 + 65); 
          } console.log(saida)
            
        }else if (entrada == entrada.toLowerCase()){
            for (let i = 0; i < entrada.length; i++) {
                saida += String.fromCharCode((entrada.charCodeAt(i) + chave2 - 97) % 26 + 97); 
              } console.log(saida)
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

    else{

        cifraCesar()
        function cifraCesar(){
            let entrada = document.querySelector('#entradaaa').value;
            let saida = '';
            const chave2 = parseInt(rangee.value);
            
            console.log (`Voce escolheu a 2 opcao, cifra de cesar 
            sua chave é:${chave2}`)
    
            // formula: ( codLetra + Desloc ) % TamAlfabeto
            // dps tentar fazer com split>loop>append (ideia alternativa) p ver se é possivel
                if (entrada == entrada.toUpperCase()){
            for (let i = 0; i < entrada.length; i++) {
                saida += String.fromCharCode((entrada.charCodeAt(i) + chave2 - 65) % 26 + 65); 
              } console.log(saida)
                
            }else if (entrada == entrada.toLowerCase()){
                for (let i = 0; i < entrada.length; i++) {
                    saida += String.fromCharCode((entrada.charCodeAt(i) + chave2 - 97) % 26 + 97); 
                  } console.log(saida)
            }
        }

    }
        
        
    
})






