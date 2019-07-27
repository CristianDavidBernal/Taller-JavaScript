/*
 * Ejercicio 3: Duplicar el contenido de los valores del arreglo
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 *
 * Autor:cristian david bernal  
 * Fecha: 27/7/2019
 *
 */

 let arrayDoble = function(array, callback) {
  for(i=0; i< array.length; i++){
    array[i] = callback(array[i]);
  }
 };

 let array = [2, 3, 4];

 arrayDoble(array, (value) => {
   return value*2;
 });

// Prueba (No modificar!)

if (array.length === 3 &&
    array[0] === 4 &&
    array[1] === 6 &&
    array[2] === 8) {
  console.log('Ejercicio 3 paso el test!');
} else {
  console.log('Ejercicio 3 no paso el test!');
}
