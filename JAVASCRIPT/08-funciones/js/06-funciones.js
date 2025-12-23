// Funciones que retornan valores
// return

function sumar(a, b) {
   console.log(a+b);
}
sumar(5, 3)


function sumar2(a, b) {
   return a + b
}

const resultadoFinal = sumar2(5, 3);
console.log(resultadoFinal);


function doblarNumero(numero) {
   return numero * 2
}

let numero = 5;
let resultado = doblarNumero(numero);
console.log(`El doble de ${numero} es ${resultado}`);
