//recibir un array 

function oddOrEven(array) {
    if (array.length != 0){
    let result = array.reduce((a, b)=> a + b)
      if (result %2 === 0){
        return 'even';
      } else {
        return 'odd'
      }
    } else {
      return 'even'
    }
        
  };