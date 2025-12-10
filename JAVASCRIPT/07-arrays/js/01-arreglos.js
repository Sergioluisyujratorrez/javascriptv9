
// Es una estructura de datos que nos permite almacenar una
// coleccion de elementos

// cualquier tipo, numeros, strings, booleanos, objetos, arrays, etc

// ejemplo
// Crear un arreglo con 5 elementos

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

const deTodo = [ 
   "String", 10, false, null, undefined, 
   {
      nombre: "Sergio",
      trabajo: "Desarrollador Web" 
   },
   [1,2,3]
]; 

console.log(deTodo);


// Como acceder a los elementos de un arreglo
const numero2 = [100,200,300,400,500,600,700,800];
console.log(numero2);

console.log(numero2[0]);
console.log(numero2[7]);

// Arreglos dentro arreglos
const numeros3 = [100,200,300,400,500,600,700,800,[10,20,30]];
console.log(numeros3);

console.log(numeros3[8][0]);

