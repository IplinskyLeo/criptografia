// 1- Pega a entrada do usuário
const btn = document.querySelector('#btnCode');

btn.addEventListener("click", function(ee) {

ee.preventDefault();

// guarda a entrada em uma variavel
const enter = document.querySelector('#entrada');
const entradaUsuario = enter.value;

console.log(entradaUsuario); 
})

// selecao do botao para ver qual metodo sera criptografado
document.getElementById('btnCode').onclick = function(){
    var botaoRadio = document.getElementsByName('selecao');

        // aqui vai a funcao de codificar em base64
        if (botaoRadio[0].checked) {
            console.log('voce escolheu a 1 opcao, base 64')
        }
        // aqui vai a funcao de codificar em cifra de cesar
        else if (botaoRadio[1].checked){
        // primeiro pegar o input da chave
        console.log ('voce escolheu a 2 opcao, cifra de cesar')}
        // segundo criptografar segundo a chave
    }





