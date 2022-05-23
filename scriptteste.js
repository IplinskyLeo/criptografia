const texto = 'AB';
const chave = 0
let varGlob = '65,10,100,40'
// function cifraCesar (){

//     for (var i=0; i < texto.length; i++){
    
        
//     let novotexto = texto.charCodeAt(i)
//     varGlob = novotexto
//         console.log(novotexto)
//     }
// }
// cifraCesar()


function uncode (){
    for (var i=0; i < varGlob.length; i++){
        let textoo = varGlob.String.fromCharCode(i)
        
        console.log(textoo)
    }
}


uncode()