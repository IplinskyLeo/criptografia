// 1- Pega a entrada do usuário
const entrada = document.querySelector('#entradaaa');
const code = document.querySelector('#code');
const uncode = document.querySelector('#btnUncode');
const saida = document.querySelector('#saida');


// code.addEventListener("click", function(ee) {
// ee.preventDefault();
// })
// uncode.addEventListener("click", function(ee) {
//     ee.preventDefault();
//     })


// selecao do botao para ver qual metodo sera criptografado
document.getElementById('btnCode').onclick = function(){
    var botaoRadio = document.getElementsByName('selecao');

        // aqui vai a funcao de codificar em base64
        if (botaoRadio[0].checked) {
            console.log('voce escolheu a 1 opcao, base 64')




            code.addEventListener('click', () =>{
                saida.value = btoa(saida.value);
            
            });
            
            uncode.addEventListener('click', () =>{
                saida.value = atob(saida.value);
            });

        }
        // aqui vai a funcao de codificar em cifra de cesar
        else if (botaoRadio[1].checked){
        // primeiro pegar o input da chave
        console.log ('voce escolheu a 2 opcao, cifra de cesar')}
        // segundo criptografar segundo a chave
    }


    




