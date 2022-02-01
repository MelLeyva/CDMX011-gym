/*Sesion 2
Ejercicio 1: Return Something to Me
*/
function giveMeSomething(a) {
  //declarar un string "something"
  //recibir un string cualquiera 
  //unir los string  y retornar el resultado 
  const string1 = "something "
  let string2 = a;
  let resultado = string1.concat(string2);
  return resultado;
}
/*Ejercicio 2: Secret Society
Pasos
recibir un array desordenado de strings
ordenarlo de forma alfabética
convertirlo a mayuscula
extrar la primera letra de cada nombre
generar un solo nuevo string (unir las latras extraidas)
retornarlo */
function societyName(friends) {
  const array = friends.sort();
  //const ordenar = array.sort(); NO FUNCIONO WHY?? 
  //es necesario pasar el PARAMETRO por la función sort 
  let mensaje = array.map((nombre) => nombre[0]).join('');
  return mensaje
}
function societyName(friends) {
  const array = friends.sort();
  const sociedadSecreta = array.reduce((accumulator, friends) => accumulator + friends[0], '')
  return sociedadSecreta;
}
/*Ejercicio 3: Stop gninnipS My sdroW!
TODO Have fun :)
-recibir un string
-dividir el string para saber las palabras que tengo
-saber cuales palabras tiene 5 o mas letras
-tengo que invertir las palabras que cumplen con la condiciónprevia 
 -teng que generar mi string con las palabras normales y las invertidas*/
function spinWords(string) {
  let originalFrase = string.split(' ');
  //console.log(originalFrase);
  for (let i = 0; i < originalFrase.length; i++) {
    if (originalFrase[i].length >= 5) {
      let wordReverse = originalFrase[i].split('').reverse().join('');
      originalFrase[i] = wordReverse
      console.log(wordReverse);
    }
  }
  let newFrase = originalFrase.join(" ")
  console.log(newFrase)
  return newFrase
}
/*Ejercicio 4
-Rotas una cadena de izquierda a derecha
-decralar array vaco que reciba las nuevas combinaciones
-hace run cilo que recorra el string, 
-agrarar la nnueva combinacion al final del arreglo 
-slice(i) devuelve las letras despues de la primera posicios  "bc, c"
-slice(0,i) concatena la los valores extraidos "a, ab "
*/
function leftRotations(str) {
		const array=[];
		for(let i= 0; i < str.length; i++){
			array.push(str.slice(i) + str.slice(0,i))
		}
	return array
};