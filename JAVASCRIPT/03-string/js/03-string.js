
const productoCuatro = "    Televisor 20 pulgadas    ";
const productoCinco = "Monitor 24 pulgadas";


console.log(productoCuatro);
console.log(productoCuatro.length);


// trim elimina los espacios en blanco al inicio y al final
console.log(productoCuatro.trim().length);

// replace reemplaza un valor por otro
console.log(productoCinco.replace("pulgadas", "otro"));

// slice extrae una parte de un string 
// subtring tambien extrae una parte de un string
console.log(productoCinco.substring(0, 10));

// .toUpperCase(); convierte el string a mayusculas
console.log(productoCinco.toUpperCase());

// .toLowerCase(); convierte el string a minusculas
console.log(productoCinco.toLowerCase());


// .toString(); convierte otros tipos de datos a string
const numero = 300;
console.log(numero);
console.log(numero.toString());

