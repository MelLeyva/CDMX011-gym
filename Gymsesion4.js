
function abbrevName(name){
    const firstInitial=name.slice(0,1);
    const begin= name.indexOf(" ")+1;
    const cut=begin+1;
    const secondInitial=name.slice(begin,cut)
    const initials= firstInitial + "." + secondInitial
    return initials
}

//uso de metodos array
function abbrevName(name){
    return name.split(" ").map(initial => initial[0]
   ).join(".")
   
   }