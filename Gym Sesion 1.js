/*Sesión 1
Ejercicio 1: Star Lovers
*/
export const printStar = function (numero) {
    let result = "";
    for(let i = 0; i < numero; i++){
        result += "*";
    }
    return result;
    }
/*Sesión 1
Ejercicio 2: Star Lovers
*/
    
    export const printArrayStar = function (numero) {
        let array =[];
        for(let i= 1; i <= numero; i++){
            array.push(printStar(i));
        }
    console.log(array);
    return array
    };

    const printArrayStar = (num) => {
        const array = [];
      
        for (let i = 0; i < num; i++) {
          let elementArray = "";
      
          for (let stars = i; stars >= 0; stars--) {
            elementArray += "*";
          }
      
          array.push(elementArray);
        }
      
        return array;
      };
      
/*Sesión 1
Ejercicio 3: SpongeBob MeMe
-Recibir un string
-Definir el  array
-Recorrer el array
-Declarar el valor en cada posición 
-Condicionar la posicion par entonces el valor se pasa a mayusculas, su suma al string vacio 
-si no es par entonces hacer minuscula y 
unir con los demas letras en minusculas
*/
function spongeMeme(sentence) {
    let frase="";
    let array=sentence;
    
    for(let i=0; i < array.length; i++){
          const letters = array [i]
          if (i %2 ===0){
              const upperCase = letters.toUpperCase();
              frase += upperCase;
          }else{
              const lowerCase = letters.toLowerCase();
              frase += lowerCase;
          }
      }
          return frase
  }

