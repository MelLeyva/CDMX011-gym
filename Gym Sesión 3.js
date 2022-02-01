/*Sesión 3 
Ejercicio 1: Remove String Spaces
Pasos
-recibir un string vacio 
-extraer elementos serapaados por espacio
-unirlos sin espacios */
function noSpace(x){
let finalResult= x.split(" ").join("");
  console.log(finalResult);
  return finalResult
}
//Versión corta
function noSpace(x){
    return  x.split(" ").join("");
   }
/*Ejercicio 2
-recibir dos array */
function transform(source, target) {
  const result=[source]
  for(let i=0; i<source.length; i++){
    if(source[i]!==target[i]){
      result.push(target.slice(0,i+1)+source.slice(i+1))
    }
  }
  return result
}
//EJERCICIO 3 
function highAndLow(numbers){
  //recibir y string 
//el cuale sta separado por espacios

const array= numbers.split(" ").map(Number);
const max= array.reduce((n,m) => Math.max(n,m), -Number.POSITIVE_INFINITY).toString()
const min= array.reduce((n,m) => Math.min(n,m), Number.POSITIVE_INFINITY).toString()
return(max + " " + min)
  
}
