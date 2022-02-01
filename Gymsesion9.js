// Create Phone Number

function createPhoneNumber(numbers){
  
  //Seccionar el array en 3 segmentos
  //primer segmento [0]-[2]
  //segundo segmento [3]-[5
  //tercer segmento [6]-[9]
  //unir segmentos en un string dando el formato
  const str1 = numbers.slice(0,3).join('');
  const str2 = numbers.slice(3,6).join('')
  const str3 = numbers.slice(6).join('')
  return('('+ str1.concat(') ', str2, '-' , str3))
}
// Counting sheep...

function countSheeps(arrayOfSheep) {
let count = 0

arrayOfSheep.forEach( element => {
  if(element == true){
    count ++
  }
});
   return count
}
// Roman to integer 
//saber la equivalencia de cada valor
 // Saber que recibimos 
 // Recorrer 
 // Validar
 // 

function extraer(peticion){
    const tabla = {
        I : 1,
        V : 5,
        X : 10,
        L: 50,
        C : 100,
        D : 500,
        M :1000,
    };
return tabla[peticion];
    }


const romanToInt = function(s) {
    let result = 0;
    let  index= 0;
    
while(index < s.length){
   if(index +1 < s.length & extraer(s[index]) < extraer(s[index+1])) {
       result += extraer(s[index+1])-extraer(s[index])
       index += 2;
   }else{
       result += extraer(s[index])
       index += 1
   }
   
}
    return result;
}


console.log(extraer('M'))