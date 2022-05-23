// const texto = 'ABCCCCC';
const chave = 1
// let varGlob = '65,10,100,40'

function cifraCesar (texto){

    let contador  = '';

    for (var i=0; i < texto.length; i++){
    contador += texto.charCodeAt(i);
    }
    console.log (contador)

}

cifraCesar('ABC')


// function calculate() {
//     var input = document.getElementById("input").value.toUpperCase();
//     var result = "";

//     for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

//         var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
//         var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
//         letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
//         result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
//     }

//     document.getElementById("output").innerHTML = result;
// }



// function uncode (){
//     for (var i=0; i < varGlob.length; i++){
//         let textoo = varGlob.String.fromCharCode(i)
        
//         console.log(textoo)
//     }
// }


// uncode()