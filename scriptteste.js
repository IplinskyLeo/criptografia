// const texto = ('A Bc');
// const chave = 1;
// let contador  = '';
// var texto2= texto.split('')
// let textoAscii = '';

// console.log(texto)
// console.log(texto2)
// // console.log()

// function codigo(){
// for (var i=0;i<5;i++){
//     textoAscii = texto2[i]
//     let textoAscii2 = textoAscii.charCodeAt(i);
//     console.log(textoAscii)
// }}
// codigo()


code.addEventListener('click', function(e){
    e.preventDefault;
    console.log('code')


    function cifraCesar(){
        let entrada = document.querySelector('#Entrada').value;
        let saida = '';
        let chave = 2;
        
        // formula: ( codLetra + Desloc ) % TamAlfabeto
        // dps tentar fazer com split>loop>append (ideia alternativa) p ver se é possivel
            if (entrada == entrada.toUpperCase()){
        for (let i = 0; i < entrada.length; i++) {
            saida += String.fromCharCode((entrada.charCodeAt(i) + chave - 65) % 26 + 65); 
          } console.log(saida)
            
        }else if (entrada == entrada.toLowerCase()){
            for (let i = 0; i < entrada.length; i++) {
                saida += String.fromCharCode((entrada.charCodeAt(i) + chave - 97) % 26 + 97); 
              } console.log(saida)
        }else {
            alert('Sua entrada não é suportada ainda. Digite apenas texto. Estamos em constante evolução!')
        }
        

}
    
    cifraCesar()

})


























// console.log(texto2)

// // String.fromCharCode()
// //texto2[2].charCodeAt(0)

// function cifraCesar (texto2){
    
//     for (var i=0; i < texto2.length; i++){


//     contador += texto2[i];

//     // .charCodeAt(i) + chave
//     // for (var j=0; i < texto.length; j++){}

//     let novotexto = String.fromCharCode(66);
//     console.log (novotexto)
//         if (i>10)
//         break
//         stop
//     }
//     console.log (contador)
//     console.log(texto2)
// }
// cifraCesar()